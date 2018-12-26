<?php

/**
 * Created by PhpStorm.
 * User: prabhato
 * Date: 1/30/2017
 * Time: 7:59 PM
 */
include_once (__DIR__) . "/../email.sender.inc";
include_once (__DIR__) . "/../../coolgadgets/Promotion.inc";
include_once (__DIR__) . "/../../coolgadgets/CoolGadgets.inc";
include_once (__DIR__) . "/../../coolgadgets/Promotion.inc";
include_once (__DIR__) . "/../../sql/Tables/PromotionTable.inc";
include_once (__DIR__) . "/../../../config/mail.config.php";
include_once (__DIR__) . "/../../../config/DeploymentEnvironment.php";
include_once (__DIR__) . "/../template_generator/Top10EmailTemplate.inc";
include_once (__DIR__) . "/../../../model/coolgadgets/EntityType.inc";

class PromotionalMail
{
    var $emailSender;
    var $promotion;
    var $coolGadgets;
    var $conn;
    var $countryVsFeed = Array();
    var $templateRender;
    var $NEW_STORY = "NEW_STORY";
    var $NEW_GADGET = "NEW_GADGET";
    var $TOP_10 = "TOP_10";


    function __construct($conn)
    {
        $this->emailSender = new EmailSender();
        $this->coolGadgets = new CoolGadgets($conn, EntityType::$GADGET);
        $this->promotion = new Promotion($conn);
        $this->conn = $conn;
        $this->templateRender = new Top10EmailTemplate();
    }

    function processBeforeEmailSend()
    {

    }

    function sendPromotionalMail($subject, $promotionType, $noOfEmailPerCronJob, $gadgetsPerMail)
    {
        $users = array();
        switch ($promotionType) {
            case $this->TOP_10:
                $users = $this->promotion->getUserDataForTop10Promotion($noOfEmailPerCronJob);
                break;
            case $this->NEW_GADGET:
                $users = $this->promotion->getUserDataForNewGadgetPromotion($noOfEmailPerCronJob);
                break;
            default:
                break;
        }
        if(sizeof($users) > 0) {

            foreach ($users as $user) {
                $country = $user[PromotionTable::$COUNTRY];
                $emailId = $user[PromotionTable::$EMAIL_ID];
                $emailSent = $user[PromotionTable::$EMAIL_SENT];
                if(isset($this->countryVsFeed[$country])) {
                    $gadgets = $this->countryVsFeed[$country];
                } else {
                    $gadgets = $this->getPromotionData($promotionType, $gadgetsPerMail, $country);
                    $this->countryVsFeed[$country] = $gadgets;
                }

                $emailTemplate = $this->templateRender->generateEmailTemplate($emailId, $gadgets);
                if(strlen($emailTemplate) > 0) {
                    $this->_sendMail($subject, $emailId, $emailTemplate, $promotionType, $emailSent);
                }
            }
        }
    }

    function _sendMail($subject, $emailId, $emailTemplate, $promotionType, $emailSent)
    {
        if(isProd()) {
            $result = $this->emailSender->sendMail($subject, $emailId, $emailTemplate);
            $this->processAfterEmailSend($result, $promotionType, $emailId, $emailSent);
        } else {
            echo $emailTemplate;
        }
    }

    function getPromotionData($promotionType, $limit, $country)
    {
        switch ($promotionType) {
            case $this->TOP_10:
                return $this->coolGadgets->getDataByLimitAndCountry($limit, $country);
                break;
            case $this->NEW_GADGET:
                return $this->coolGadgets->getDataByLimitAndCountry($limit, $country);
                break;
            default:
                break;
        }
    }

    function processAfterEmailSend($result, $promotionType, $emailId, $emailSent)
    {
        if($result) {
            switch ($promotionType) {
                case $this->NEW_STORY:
                    $this->promotion->updateNewStoriesStatus($emailId);
                    break;
                case $this->TOP_10:
                    $this->promotion->updateTop10Status(2, $emailId);
                    break;
                case $this->NEW_GADGET:
                    $this->promotion->updateNewGadgetStatus(2, $emailId);
                    break;
                default:
                    break;
            }
        } else {
            if($emailSent < 1) {
                $this->promotion->updateValidEmail(false, $emailId);
            }
        }
    }
}