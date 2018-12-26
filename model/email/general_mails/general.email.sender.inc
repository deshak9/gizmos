<?php

/**
 * Created by PhpStorm.
 * User: prabhato
 * Date: 1/12/2017
 * Time: 10:29 PM
 */

include_once (__DIR__) . "/../email.sender.inc";

class GeneralEmailSender
{
    private $emailSender;
    private $emailTemplateLocation = "http://www.gadgetclues.com/email_templates/";

    function __construct()
    {
        $this->emailSender = new EmailSender();
    }

    function sendSignupEmail($name, $emailId)
    {
        $baseEmailContent = file_get_contents($this->emailTemplateLocation . "base.email.template.html");
        $signupContent = file_get_contents($this->emailTemplateLocation . "new.signup.template.html");
        $signupContent = str_replace("replaceUserName", $name, $signupContent);
        $emailContent = str_replace("replaceContentHere", $signupContent, $baseEmailContent);
        $emailContent = str_replace("replaceUnsubscribeContentHere", "", $emailContent);
        $this->emailSender->sendMail("Lets keep in touch", $emailId, $emailContent);
    }

    function sendRestPasswordLinkEmail($name, $resetLink, $emailId)
    {
        $finalLink = "http://www.gadgetclues.com/user/reset?_l=" . $resetLink;
        $baseEmailContent = file_get_contents($this->emailTemplateLocation . "base.email.template.html");
        $resetPassContent = file_get_contents($this->emailTemplateLocation . "reset.password.template.html");
        $resetPassContent = str_replace("replaceUserName", $name, $resetPassContent);
        $resetPassContent = str_replace("replaceResetLinkHere", $finalLink, $resetPassContent);
        $emailContent = str_replace("replaceContentHere", $resetPassContent, $baseEmailContent);
        $emailContent = str_replace("replaceUnsubscribeContentHere", "", $emailContent);
        $this->emailSender->sendMail("Reset your password", $emailId, $emailContent);
    }
}