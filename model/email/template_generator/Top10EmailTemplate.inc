<?php

/**
 * Created by PhpStorm.
 * User: prabhato
 * Date: 2/18/2017
 * Time: 4:50 PM
 */
include_once (__DIR__) . "/gadget.cards.template.php";
include_once (__DIR__) . "/../../../config/server.details.php";
include_once (__DIR__) . "/Unsubscribe.inc";

class Top10EmailTemplate
{
    private $emailTemplateLocation;

    function __construct()
    {
        $this->emailTemplateLocation = getHostUrl() . "/email_templates/";
    }

    function generateEmailTemplate($emailId, $feeds)
    {
        $gadgetCards = generateGadgetCards($feeds, $emailId);
        //replaceHomePageUrl
        $homePageUrl = getHostUrl() . "?_r=email&_e=" . HashGenerator::encodeDoubleBase64($emailId);

        $baseEmailContent = file_get_contents($this->emailTemplateLocation . "base.email.template.html");
        $top10Template = file_get_contents($this->emailTemplateLocation . "top10.gadgets.template.html");
        $unsubscribeTemplate = file_get_contents($this->emailTemplateLocation . "unsubscribe.template.html");

        $top10Template = str_replace("replaceUserName", "There", $top10Template);
        $top10Template = str_replace("replaceGadgetCardsContent", $gadgetCards, $top10Template);
        $unsubscribeTemplate = str_replace("replaceUnsubscribeUrl", Unsubscribe::getUnsubscribeLink($emailId), $unsubscribeTemplate);
        $baseEmailContent = str_replace("replaceUnsubscribeContentHere", $unsubscribeTemplate, $baseEmailContent);
        $emailContent = str_replace("replaceContentHere", $top10Template, $baseEmailContent);
        
        $emailContent = str_replace("replaceHomePageUrl", $homePageUrl, $emailContent);

        return $emailContent;
    }
}