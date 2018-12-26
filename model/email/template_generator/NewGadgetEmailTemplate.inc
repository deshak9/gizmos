<?php

/**
 * Created by PhpStorm.
 * User: prabhato
 * Date: 2/18/2017
 * Time: 4:51 PM
 */

include_once (__DIR__) . "/gadget.cards.template.php";
include_once (__DIR__) . "/../../../config/server.details.php";
include_once (__DIR__) . "/Unsubscribe.inc";

class NewGadgetEmailTemplate
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
        $newGadgetsTemplate = file_get_contents($this->emailTemplateLocation . "new.gadgets.template.html");
        $unsubscribeTemplate = file_get_contents($this->emailTemplateLocation . "unsubscribe.template.html");

        $newGadgetsTemplate = str_replace("replaceUserName", "There", $newGadgetsTemplate);
        $newGadgetsTemplate = str_replace("replaceGadgetCardsContent", $gadgetCards, $newGadgetsTemplate);
        $unsubscribeTemplate = str_replace("replaceUnsubscribeUrl", Unsubscribe::getUnsubscribeLink($emailId), $unsubscribeTemplate);
        $baseEmailContent = str_replace("replaceUnsubscribeContentHere", $unsubscribeTemplate, $baseEmailContent);
        $emailContent = str_replace("replaceContentHere", $newGadgetsTemplate, $baseEmailContent);

        $emailContent = str_replace("replaceHomePageUrl", $homePageUrl, $emailContent);

        return $emailContent;
    }
}