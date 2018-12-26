<?php

include_once (__DIR__) . "/UserDetailsDB.inc";
include_once (__DIR__) . "/../util/UIDGenerator.php";
include_once (__DIR__) . "/../util/Util.inc";
include_once (__DIR__) . "/../../config/keys.php";
include_once (__DIR__) . "/../login/ClientCookies.inc";
include_once (__DIR__) . "/../util/HashGenerator.inc";
include_once (__DIR__) . "/../util/InputValidator.php";
include_once (__DIR__) . "/../coolgadgets/Promotion.inc";
include_once (__DIR__) . "/../email/general_mails/general.email.sender.inc";

class UserDetail
{
    private $userDetailsDB;
    private $clientCookie;
    private $generalEmailSender;
    private $promotion;

    function __construct($conn)
    {
        $this->userDetailsDB = new UserDetailsDB($conn);
        $this->clientCookie = new ClientCookies();
        $this->generalEmailSender = new GeneralEmailSender();
        $this->promotion = new Promotion($conn);
    }

    function getLoggedInUserDetails()
    {
        $result = array();
        $result['UID'] = isset($_SESSION['RW-UID']) ? $_SESSION['RW-UID'] : '';
        $result['RW-USERNAME'] = isset($_SESSION['RW-USERNAME']) ? $_SESSION['RW-USERNAME'] : '';
        $result['RW-BCC-KEY'] = isset($_SESSION['RW-BCC-KEY']) ? $_SESSION['RW-BCC-KEY'] : '';
        $result['RW-IS-LOGGED-IN'] = $result['UID'] === '' ? false : true;


        return json_encode($result);
    }

    function onUserLoginWithJsonInput($request_body)
    {
        $data = json_decode($request_body);
        $emailId = trim(strtolower($data->emailId));
        $password = trim($data->password);
        return $this->onUserLogin($emailId, $password);
    }

    function onUserLogin($emailId, $password)
    {
        $hashedPassword = $this->hashPassword($emailId, $password);

        if(InputValidator::validateEmail($emailId)) {
            $user = $this->userDetailsDB->getUserByEmailId($emailId);
            if(sizeof($user) > 0) {
                $user = $user[0];
                if($user[UserAccountsTable::$PASSWORD] == $hashedPassword) {
                    $hashedCookie = $this->clientCookie->generateCookie($emailId, $hashedPassword);
                    $this->saveCookieToDb($emailId, $hashedCookie);
                    $this->clientCookie->setClientCookie($hashedCookie);
                    return true;
                }
            }
        }

        sleep(3);
        return false;
    }

    private function saveCookieToDb($emailId, $hashedCookie)
    {
        $columns = array(UserAccountsTable::$COOKIE);
        $values = array($hashedCookie);
        $this->userDetailsDB->updateColumns($columns, "ss", $values, $emailId);
    }

    function registrationWithJsonInput($request_body)
    {
        $data = json_decode($request_body);
        $userName = trim($data->userName);
        $emailId = trim(strtolower($data->emailId));
        $password = trim($data->password);
        return $this->newUserRegistration($userName, $emailId, $password);
    }

    function newUserRegistration($userName, $emailId, $password)
    {
        $hashedPassword = $this->hashPassword($emailId, $password);
        $UID = HashGenerator::getHashedValue($hashedPassword, 15);

        if(InputValidator::validateEmail($emailId) && InputValidator::validateOnlyText($userName, 2, 50) && InputValidator::validatePassword($password)) {

            if(!$this->validateIfAlreadyExist($emailId)) {

                $hashedCookie = $this->clientCookie->generateCookie($emailId, $hashedPassword);
                if($this->userDetailsDB->insertData($userName, $emailId, $UID, $hashedPassword, $hashedCookie)) {
                    $this->clientCookie->setClientCookie($hashedCookie);
                    if(!Util::checkForDummyEmailId($emailId)) {
                        $this->promotion->_submitNewPromotionEntry($emailId, "N/A", false);
                        $this->generalEmailSender->sendSignupEmail($userName, $emailId);
                    }
                    return true;
                }
            }
        }
        return false;
    }

    function onUserLogout()
    {
        $this->clientCookie->unsetCookie();
    }

    function onResetPassword($request_body)
    {
        $data = json_decode($request_body);
        $emailId = trim(strtolower($data->emailId));

        $user = $this->userDetailsDB->getUserByEmailId($emailId);
        if(sizeof($user) > 0 && $user[0][UserAccountsTable::$EMAIL_ID] == $emailId) {
            $userName = $user[0][UserAccountsTable::$NAME];
            $hashedKey = HashGenerator::getRestPasswordHash($emailId);
            $columns = array(UserAccountsTable::$FORGOT_PASSWORD_LINK, UserAccountsTable::$FORGOT_PASSWORD_LINK_VALIDITY);
            $values = array($hashedKey, DateUtil::getCurrentDate());
            $this->userDetailsDB->updateColumns($columns, "sss", $values, $emailId);
            $this->generalEmailSender->sendRestPasswordLinkEmail($userName, $hashedKey, $emailId);
            return true;
        }
        return false;
    }

    function onResetPasswordValidation($request_body)
    {
        $data = json_decode($request_body);
        $resetPasswordLink = $data->resetPasswordLink;
        $password = trim($data->password);

        $user = $this->userDetailsDB->getUserByColumnName(UserAccountsTable::$FORGOT_PASSWORD_LINK, $resetPasswordLink);
        if(sizeof($user) > 0 && $user[0][UserAccountsTable::$FORGOT_PASSWORD_LINK] == $resetPasswordLink) {
            $user = $user[0];
            $emailId = $user[UserAccountsTable::$EMAIL_ID];
            $forgotPasswordLikDB = $user[UserAccountsTable::$FORGOT_PASSWORD_LINK_VALIDITY];

            if(!DateUtil::moreThanYesterday($forgotPasswordLikDB) && InputValidator::validatePassword($password)) {
                $hashedPassword = $this->hashPassword($emailId, $password);
                $columns = array(UserAccountsTable::$PASSWORD, UserAccountsTable::$FORGOT_PASSWORD_LINK);
                $values = array($hashedPassword, null);
                $this->userDetailsDB->updateColumns($columns, "sss", $values, $emailId);
                return true;
            }
        }
        return false;
    }

    private function validateIfAlreadyExist($emailId)
    {
        $row = $this->userDetailsDB->getUserByEmailId($emailId);
        if(sizeof($row) > 0) {
            return true;
        }
        return false;
    }

    private function hashPassword($emailId, $password)
    {
        $salt = getPasswordSaltKey();
        $hashedPassword = $emailId . $password . $salt;
        return HashGenerator::hashValue($hashedPassword);
    }

    public function getUserByCookie($cookie)
    {
        return $this->userDetailsDB->getUserByCookie($cookie);
    }

    public function validateCookie()
    {
        if(isset($_COOKIE['RWcookie'])) {
            $cookie = $_COOKIE['RWcookie'];
            if(strlen($cookie) > 0) {
                $user = $this->getUserByCookie($cookie);
                if(sizeof($user) > 0) {
                    $this->clientCookie->validateCookie($user, $cookie);
                    return;
                }
            }
        }

        $this->clientCookie->unsetSessionVar();
    }

}