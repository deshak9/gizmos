<?php

include_once (__DIR__) . "/../../config/DeploymentEnvironment.php";

class EmailSender
{

    function __construct()
    {

    }

    private function getHeader()
    {
        $headers = "From: Gadget Clues <care@gadgetclues.com>\r\n";
        $headers .= "MIME-Version: 1.0" . "\r\n";
        $headers .= "Content-type:text/html;charset=UTF-8" . "\r\n";
        "Reply-To: care@gadgetclues.com\r\n'" .
        "X-Mailer: PHP/" . phpversion();
        return $headers;
    }

    public function sendMail($subject, $recipients, $emailContent)
    {
        if(!isProd()) {
            return true;
        }
        
        if(mail($recipients, $subject, $emailContent, $this->getHeader())) {
            return true;
        }
        return false;
    }
}