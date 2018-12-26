<?php

include_once (__DIR__) . "/../../config/keys.php";
include_once (__DIR__) . "/../../config/DeploymentEnvironment.php";
include_once (__DIR__) . "/../userdetails/UserDetail.inc";

/**
 * Created by PhpStorm.
 * User: prabhato
 * Date: 12/17/2016
 * Time: 9:49 AM
 */
class ClientCookies
{
    function __construct()
    {
    }

    function generateCookie($emailId, $hashPassword)
    {
        $salt = getCookieSaltKey();
        $hashedCookie = $emailId . $hashPassword . $_SERVER['REMOTE_ADDR'] . $salt;
        return sha1($hashedCookie);
    }

    function setClientCookie($hashedCookie)
    {
        date_default_timezone_set("Asia/Kolkata");

        $expireIn = time() + 60 * 60 * 24 * 365;
        if(isProd())
            setcookie('RWcookie', $hashedCookie, $expireIn, '/', $this->getHostName(), null, true);
        else
            setcookie('RWcookie', $hashedCookie, $expireIn, '/', false);
    }

    function unsetCookie()
    {
        if(isProd())
            setcookie('RWcookie', "", false, '/', $this->getHostName(), null, true);
        else
            setcookie('RWcookie', "", false, '/', false);
    }

    function validateCookie($user, $cookie)
    {
        $user = $user[0];
        $hashedCookie = $user[UserAccountsTable::$EMAIL_ID] . $user[UserAccountsTable::$PASSWORD]
            . $_SERVER['REMOTE_ADDR'] . getCookieSaltKey();
        $hashedCookie = sha1($hashedCookie);

        $cookieFromDb = $user[UserAccountsTable::$COOKIE];
        if(($cookieFromDb == $cookie) && ($cookie == $hashedCookie)) {
            $_SESSION['RW-UID'] = $user[UserAccountsTable::$UID];
            $_SESSION['RW-USERNAME'] = $user[UserAccountsTable::$NAME];
        } else {
            $_SESSION['RW-UID'] = "";
            $_SESSION['RW-USERNAME'] = "";
        }

    }

    function unsetSessionVar()
    {
        if(isset($_SESSION['RW-UID'])) {
            unset($_SESSION['RW-UID']);
        }

        if(isset($_SESSION['RW-USERNAME'])) {
            unset($_SESSION['RW-USERNAME']);
        }

        if(isset($_SESSION['RW-IS-LOGGED-IN'])) {
            unset($_SESSION['RW-IS-LOGGED-IN']);
        }

        if(isset($_SESSION['RW-USERNAME'])) {
            unset($_SESSION['RW-USERNAME']);
        }
    }

    private function getHostName()
    {
        $hostName = "";
        if(isset($_SERVER['HTTP_HOST'])) {
            $hostName = $_SERVER['HTTP_HOST'];
        }
        return $hostName == "www.gadgetclues.com" || $hostName == "gadgetclues.com" ? $hostName : "www.gadgetclues.com";
    }


    function getOtherCookie($key)
    {

        if(isset($_COOKIE[$key])) {
            return $_COOKIE[$key];
        }
        return null;
    }

    function getSessionOrCookie($key)
    {
        if(isset($_SESSION[$key])) {
            return $_SESSION[$key];
        }
        return $this->getOtherCookie($key);
    }

    function setOtherCookie($key, $value, $expireIn)
    {
        if(isProd())
            setcookie($key, $value, $expireIn, '/', $this->getHostName(), null, true);
        else
            setcookie($key, $value, $expireIn, '/', false);
    }

    function setCookieAndSession($key, $value, $expireIn)
    {
        $_SESSION[$key] = $value;
        $this->setOtherCookie($key, $value, $expireIn);
    }


    static function currentTime()
    {
        date_default_timezone_set("Asia/Kolkata");
        return time();
    }

    static function oneYearExpiration()
    {
        return ClientCookies::currentTime() + 60 * 60 * 24 * 365;
    }

    static function oneMonthExpiration()
    {
        return ClientCookies::currentTime() + 60 * 60 * 24 * 30;
    }

}