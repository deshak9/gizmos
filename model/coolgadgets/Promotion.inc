<?php

/**
 * Created by PhpStorm.
 * User: prabhato
 * Date: 1/22/2017
 * Time: 12:27 PM
 */

include_once (__DIR__) . "/../sql/promotion/PromotionDB.inc";
include_once (__DIR__) . "/../email/general_mails/general.email.sender.inc";
include_once (__DIR__) . "/../util/HashGenerator.inc";

class Promotion
{
    var $conn;
    var $promotionDb;
    private $generalEmailSender;
    private $emailSentStatus = 2;

    function __construct($conn)
    {
        $this->conn = $conn;
        $this->promotionDb = new PromotionDB($conn);
        $this->generalEmailSender = new GeneralEmailSender();
    }

    function submitNewPromotionEntry($request_body)
    {
        $data = json_decode($request_body);
        $emailId = $data->emailId;
        $country = $data->country;
        return $this->_submitNewPromotionEntry($emailId, $country, true);
    }

    function _submitNewPromotionEntry($emailId, $country, $sendMail)
    {
        if($this->validateIfAlreadyExist($emailId)) {
            return true;
        }

        if($this->promotionDb->submitNewEntry($emailId, $country, 'YES', 1, 1, 1, 0)) {
            if(!Util::checkForDummyEmailId($emailId) && $sendMail) {
                $this->generalEmailSender->sendSignupEmail('There', $emailId);
            }
            return true;
        }

        return false;
    }

    private function validateIfAlreadyExist($emailId)
    {
        $row = $this->promotionDb->getDataByEmailId($emailId);
        if(sizeof($row) > 0) {
            return true;
        }
        return false;
    }

    public function getUserDataForTop10Promotion($limit)
    {
        return $this->promotionDb->getDataByLimit($limit, PromotionTable::$TOP10_STATUS);
    }

    public function getUserDataForNewGadgetPromotion($limit)
    {
        return $this->promotionDb->getDataByLimit($limit, PromotionTable::$NEW_GADGET_STATUS);
    }

    public function getUserDataForNewStoriesPromotion($limit)
    {
        return $this->promotionDb->getDataByLimit($limit, PromotionTable::$NEW_STORIES_STATUS);
    }

    public function updateValidEmail($isValid, $emailId)
    {
        $emailValid = "NO";
        if($isValid) {
            $emailValid = "YES";
        }
        $this->promotionDb->updateAColumn(PromotionTable::$VALID_EMAIL, "ss", $emailValid, $emailId);
    }

    public function updateTop10Status($status, $emailId)
    {
        $this->promotionDb->updateAColumnWithMailSentCount(PromotionTable::$TOP10_STATUS, "is", $status, $emailId);
    }

    public function updateNewStoriesStatus($emailId)
    {
        $this->promotionDb->updateAColumnWithMailSentCount(PromotionTable::$NEW_STORIES_STATUS, "is", $this->emailSentStatus, $emailId);
    }

    public function updateNewGadgetStatus($status, $emailId)
    {
        $this->promotionDb->updateAColumnWithMailSentCount(PromotionTable::$NEW_GADGET_STATUS, "is", $status, $emailId);
    }

    public function unsubscribeUserFromPromotion($data)
    {
        $emailId = trim(base64_decode(base64_decode($data)));
        if(filter_var($emailId, FILTER_VALIDATE_EMAIL) !== false) {
            if($this->promotionDb->updateAColumn(PromotionTable::$VALID_EMAIL, 'ss', "UNI", $emailId)) {
                return true;
            }
        }
        return false;
    }

    public function updateEmailUserInteractionCount($encodedEmailId)
    {
        $emailId = HashGenerator::decodeDoubleBase64($encodedEmailId);
        if(filter_var($emailId, FILTER_VALIDATE_EMAIL) !== false) {
            $this->promotionDb->updateAColumnCount(PromotionTable::$USER_INTERACTION, $emailId);
        }
    }

    public function updateTop10SchedulerJob($UIR)
    {
        $this->promotionDb->updateCronSchedulerJob(PromotionTable::$TOP10_STATUS, $UIR);
    }

    public function updateNewGadgetSchedulerJob($UIR)
    {
        return $this->promotionDb->updateCronSchedulerJob(PromotionTable::$NEW_GADGET_STATUS, $UIR);
    }

    public function updateNewStoriesSchedulerJob($UIR)
    {
        return $this->promotionDb->updateCronSchedulerJob(PromotionTable::$NEW_STORIES_STATUS, $UIR);
    }

}