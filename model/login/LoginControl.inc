<?php

class LoginControl
{
    var $conn;
    var $isLocal = true;
    var $orderDetails;

    function __construct($conn)
    {
        $this->conn = $conn;
        $this->orderDetails = new OrderDetailsDB($conn);
    }

    /// If user has already logged in and session still exits ///
    function __setForgotPasswordLink($userid)
    {
        $checkReq = false;
        $sql = "SELECT username,email,password from user_details where email=?";
        $checkReq = mysqli_prepare($this->conn, $sql);
        mysqli_stmt_bind_param($checkReq, "s", $userid);
        mysqli_stmt_execute($checkReq);
        mysqli_stmt_bind_result($checkReq, $username, $email, $password);
        mysqli_stmt_fetch($checkReq);
        $checkReq = false;
        if ($userid == $email) {
            $hashedLink1 = $userid . $password . "ui2h3u5i325u325i32u5g32i8f9f8sa88a8";
            $hashedLink1 = sha1($hashedLink1);

            $hashedLink2 = $userid . $password . $hashedLink1;
            $hashedLink2 = sha1($hashedLink2);

            $hashedLink = $hashedLink1 . $hashedLink2;

            date_default_timezone_set("Asia/Kolkata");

            $date = date('m/d/Y h:i:s a', time() + 7200);

            $submitReq = false;
            $submitReq = mysqli_prepare($this->conn, "UPDATE user_details set forgotpasswordlink=?,linkvalidity=? where email='$email'");
            mysqli_stmt_bind_param($submitReq, "ss", $hashedLink, $date);
            mysqli_stmt_execute($submitReq);

            $submitReq = false;
            return "" . $hashedLink;

        }
        return "not registered";
    }

    /// If user has already logged in and session still exits ///
    function __authenticateUser($userid, $pass, $keepmeloggedin)
    {
        $userid = strtolower($userid);
        $hashedPassword = $userid . $pass . "2432hrkjhkh2r3jgrgweqhgrf32guyg4e23ugguyrg23grjg23jhrg78fdskjsaf38";
        $hashedPassword = sha1($hashedPassword);

        $checkReq = false;

        $sql = "SELECT username,email,password from user_details where email=?";
        $checkReq = mysqli_prepare($this->conn, $sql);// or die("Unable to submit request, please try later");
        mysqli_stmt_bind_param($checkReq, "s", $userid);
        mysqli_stmt_execute($checkReq);
        mysqli_stmt_bind_result($checkReq, $username, $email, $password);
        mysqli_stmt_fetch($checkReq);

        $checkReq = false;

        if ($email == $userid && $hashedPassword == $password) {
            $hashedCookie = $userid . $hashedPassword . $_SERVER['REMOTE_ADDR'] . "f32fiufdsf9828r2372q83r7rfy83gfgewf7g823f7g3f223f2uyg32f323fsafsauiiwgeiufg";
            $hashedCookie = sha1($hashedCookie);
            $_SESSION["userisloggedIn"] = 1;
            date_default_timezone_set("Asia/Kolkata");
            if ($keepmeloggedin == "true") {

                if ($this->isLocal)
                    setcookie('RWcookie', $hashedCookie, time() + 60 * 60 * 24 * 365, '/', false);
                else
                    setcookie('RWcookie', $hashedCookie, time() + 60 * 60 * 24 * 365, '/', 'www.refillwallet.com');

            } else {
                if ($this->isLocal)
                    setcookie('RWcookie', $hashedCookie, false, '/', false);
                else
                    setcookie('RWcookie', $hashedCookie, false, '/', 'www.refillwallet.com');

            }

            $sql = "UPDATE user_details set cookie='$hashedCookie' where email='$email'";
            mysqli_query($this->conn, $sql);

            return true;
        } else
            return false;
    }

    function __resetPassword($pass, $resetlink)
    {
        $checkReq = false;

        $sql = "SELECT email,forgotpasswordlink,linkvalidity from user_details where forgotpasswordlink=?";
        $checkReq = mysqli_prepare($this->conn, $sql);// or die("Unable to submit request, please try later");
        mysqli_stmt_bind_param($checkReq, "s", $resetlink);
        mysqli_stmt_execute($checkReq);
        mysqli_stmt_bind_result($checkReq, $userid, $resetlinkfromdb, $linkvalidity);
        mysqli_stmt_fetch($checkReq);
        $checkReq = false;

        date_default_timezone_set("Asia/Kolkata");

        $date = date('m/d/Y h:i:s a', time());


        if ($resetlink == $resetlinkfromdb) {
            /* if($linkvalidity<$date)
            return "expired link"; */
            // reset cookie as password is changed //


            $hashedPassword = $userid . $pass . "2432hrkjhkh2r3jgrgweqhgrf32guyg4e23ugguyrg23grjg23jhrg78fdskjsaf38";
            $hashedPassword = sha1($hashedPassword);

            $hashedCookie = $userid . $hashedPassword . $_SERVER['REMOTE_ADDR'] . "f32fiufdsf9828r2372q83r7rfy83gfgewf7g823f7g3f223f2uyg32f323fsafsauiiwgeiufg";
            $hashedCookie = sha1($hashedCookie);

            $submitReq = false;
            $submitReq = mysqli_prepare($this->conn, "UPDATE user_details set password=?,cookie=? where email='$userid'");
            mysqli_stmt_bind_param($submitReq, "ss", $hashedPassword, $hashedCookie);
            mysqli_stmt_execute($submitReq);
            return "yes";
        } else
            return "invalid link";


    }

    function __signupUser($username, $userid, $phoneNo, $pass, $paymentmethod)
    {
        $userid = strtolower($userid);

        $sql = "SELECT email,mobilenumber from user_details where email=? OR mobilenumber=?";
        $checkReq = mysqli_prepare($this->conn, $sql);// or die("Unable to submit request, please try later");
        mysqli_stmt_bind_param($checkReq, "sd", $userid, $phoneNo);
        mysqli_stmt_execute($checkReq);
        mysqli_stmt_bind_result($checkReq, $email, $phone);
        mysqli_stmt_fetch($checkReq);

        if ($email == $userid or $phone == $phoneNo) {
            return "exist";
        }

        $hashedPassword = $userid . $pass . "2432hrkjhkh2r3jgrgweqhgrf32guyg4e23ugguyrg23grjg23jhrg78fdskjsaf38";
        $hashedPassword = sha1($hashedPassword);


        $hashedCookie = $userid . $hashedPassword . $_SERVER['REMOTE_ADDR'] . "f32fiufdsf9828r2372q83r7rfy83gfgewf7g823f7g3f223f2uyg32f323fsafsauiiwgeiufg";
        $hashedCookie = sha1($hashedCookie);
        date_default_timezone_set("Asia/Kolkata");

        if ($this->isLocal)
            setcookie('RWcookie', $hashedCookie, false, '/', false);
        else
            setcookie('RWcookie', $hashedCookie, false, '/', 'www.refillwallet.com');

        $UID = substr(sha1($hashedCookie), 30);

        switch ($paymentmethod) {
            case '1':
                $selectedpayment = 'mobikwik';
                break;
            case '2':
                $selectedpayment = 'paytm';
                break;
            case '3':
                $selectedpayment = 'oxigen';
                break;
            case '4':
                $selectedpayment = 'tta';
                break;
            default:
                $selectedpayment = '';
        }

        if (isset($_SESSION["id"]))
            $desc = $_SESSION["id"];
        else
            $desc = "";
        if (isset($_SESSION["RW-reffby"]))
            $reffby = $_SESSION["RW-reffby"];
        else
            $reffby = "";

        $submitReq = false;

        $submitReq = mysqli_prepare($this->conn, "INSERT Into user_details (username,email,UID,reffby,mobilenumber,password,cookie,paymentmethod,registeredvia) VALUES (?,?,?,?,?,?,?,?,?)");
        mysqli_stmt_bind_param($submitReq, 'ssssdssss', $username, $userid, $UID, $reffby, $phoneNo, $hashedPassword, $hashedCookie, $selectedpayment, $desc);
        mysqli_stmt_execute($submitReq);

        $submitReq = false;

        if ($desc == "Registered via mail 50")
            $this->orderDetails->insertData($userid, $phoneNo, $UID, "Signup Bonus", 50, "6");


        $checkReq = false;
        $sql = "select email from promotion where email=?";
        $checkReq = mysqli_prepare($this->conn, $sql);// or die("Unable to submit request, please try later");
        mysqli_stmt_bind_param($checkReq, "s", $userid);
        mysqli_stmt_execute($checkReq);
        mysqli_stmt_bind_result($checkReq, $email);
        mysqli_stmt_fetch($checkReq);
        $checkReq = false;
        $submitReq = false;
        if ($email == $userid) {
            $submitReq = mysqli_prepare($this->conn, "UPDATE promotion set priority=5 where email='$email'");
            mysqli_stmt_execute($submitReq);
        } else {

            $submitReq = mysqli_prepare($this->conn, "INSERT Into promotion (email,MailSentFlag,PromotionId,priority) VALUES (?,?,?,?)") or die("Unable to submit request, please try later");
            $MailSentFlag = "0";
            $PromotionId = 5000;
            $priority = 5;
            mysqli_stmt_bind_param($submitReq, 'ssdd', $userid, $MailSentFlag, $PromotionId, $priority);
            mysqli_stmt_execute($submitReq);
        }

        return "yes";

    }

    function __sendMail()
    {
        $obj = new SendPaymentInfoClass($this->conn);
        $email_contents = $obj->__notifyUserWhenSignup("prabhat");
        echo $email_contents;
    }

    function __closeSession($username)
    {

    }


    function _saveEmailIdForNewLetter($email)
    {
        $submitReq = false;
        $submitReq = mysqli_prepare($this->conn, "INSERT Into promotion (email,MailSentFlag,PromotionId,priority) VALUES (?,?,?,?)");
        $MailSentFlag = "0";
///registerd via newletter///
        $PromotionId = 7000;
        $priority = 5;
        mysqli_stmt_bind_param($submitReq, 'ssdd', $email, $MailSentFlag, $PromotionId, $priority);
        mysqli_stmt_execute($submitReq);
        $submitReq = false;
        return 'Subscribed successfully';
    }

    function __submitMissingOrder($uid, $orderId, $txtRetailer, $DateOfOrder, $txtAmount)
    {
        $checkReq = mysqli_prepare($this->conn, "select OrderId from missing_orders where OrderId=?");
        mysqli_stmt_bind_param($checkReq, "s", $orderId);

        mysqli_stmt_execute($checkReq);
        mysqli_stmt_bind_result($checkReq, $avalableOrderId);

        /* fetch value */
        mysqli_stmt_fetch($checkReq);

        $checkReq = false;

        if ($avalableOrderId == $orderId)
            return "Request for order id '" . $orderId . "' has already been submitted";
        else {
            $submitReq = mysqli_prepare($this->conn, "Insert Into missing_orders (UID,OrderId,store_name,DateOfOrder,OrderAmount) VALUES (?,?,?,?,?)");

            mysqli_stmt_bind_param($submitReq, 'ssssd', $uid, $orderId, $txtRetailer, $DateOfOrder, $txtAmount);

            mysqli_stmt_execute($submitReq);

            return "Your order has been submitted successfully";
            /*$sendSingleMailObj = new SendPaymentInfoClass($conn);
            $email_text=$sendSingleMailObj->_notifiyUserWhenOrderDetailsSubmitted($email);
            $result=sendSingleMail("asfhjhkj4hjk32h4j32hkh5k35f8asf7","Thank you for your purchase via refillwallet",$email_text,$email);*/

        }
        return "no";
    }

}

?>