<?php

/**
 * Created by PhpStorm.
 * User: prabhato
 * Date: 3/24/2017
 * Time: 7:56 PM
 */

include_once (__DIR__) . "/../../../config/server.details.php";

class NewStoriesEmailTemplate
{

    private $emailTemplateLocation;

    function __construct()
    {
        $this->emailTemplateLocation = getHostUrl() . "/email_templates/";
    }

    function generateEmailTemplate($emailId, $stories)
    {
        $storyCards = $this->generateStoryCards($stories, $emailId);
        //replaceHomePageUrl
        $homePageUrl = getHostUrl() . "?_r=email&_e=" . HashGenerator::encodeDoubleBase64($emailId);

        $baseEmailContent = file_get_contents($this->emailTemplateLocation . "base.email.template.html");
        $newStoriesTemplate = file_get_contents($this->emailTemplateLocation . "new.stories.template.html");
        $unsubscribeTemplate = file_get_contents($this->emailTemplateLocation . "unsubscribe.template.html");

        $newStoriesTemplate = str_replace("replaceUserName", "There", $newStoriesTemplate);
        $newStoriesTemplate = str_replace("replaceStoriesCardsContent", $storyCards, $newStoriesTemplate);
        $unsubscribeTemplate = str_replace("replaceUnsubscribeUrl", Unsubscribe::getUnsubscribeLink($emailId), $unsubscribeTemplate);
        $baseEmailContent = str_replace("replaceUnsubscribeContentHere", $unsubscribeTemplate, $baseEmailContent);
        $emailContent = str_replace("replaceContentHere", $newStoriesTemplate, $baseEmailContent);

        $emailContent = str_replace("replaceHomePageUrl", $homePageUrl, $emailContent);

        return $emailContent;
    }

    function generateStoryCards($feeds, $emailId)
    {

        $cards = "";
        foreach ($feeds as $row) {
            $card = $this->getStoryCard($row, $emailId);
            $cards .= "<tr>$card</tr>";
            //$cards .= "<tr><td style='padding: 0;width: 100%;'><hr style='padding: 0;width: 100%;' /></td></tr>";
        }

        return "<table cellpadding='50px;' style='font-family: sans-serif;width: 100%;background:#f5f5e8;table-layout: fixed;'>" . $cards . "</table>";
    }

    function getStoryCard($row, $emailId)
    {

        $name = $row[CoolGadgetsTable::$NAME];
        $imageUrl = getHostUrl() . $row[CoolGadgetsTable::$IMAGE_URL];
        $description = $row[CoolGadgetsTable::$DESCRIPTION];
        $type = strtolower($row[CoolGadgetsTable::$TYPE]);
        $pageName = str_replace(' ', '-', $name);
        $cardUrl = getHostUrl() . "/$type/$pageName"
            . "?_r=email&_e=" . HashGenerator::encodeDoubleBase64($emailId);


        $card = "<td style='vertical-align:top;width: 100px;padding: 0;'>";
        $card .= "<img style='width: 100px;' src='$imageUrl' />";
        $card .= "</td>";

        $card .= "<td style='padding-top:0;padding-left: 20px;width: 100%;padding-right: 0;'>";
        $card .= "<div style='width: 100%'><a style='font-size:20px;margin-top:0;text-transform:capitalize;text-decoration: none;color: #222;' href='$cardUrl'>$name</a></div>";
        $card .= "<div style='width: 100%;'><p style='font-size: 13px;line-height:14px;color: #222;margin-top: 7px;'>$description</p></div>";
        $card .= "<div style='margin-top:25px;width: 100%;'><a style='text-decoration: none;padding:10px 20px;border:1px solid #373737;font-size:13px;color: #dedede;background: #373737;' href='$cardUrl'>Read More >></a></div>";
        $card .= "</td>";

        return $card;
    }

}