<?php

/**
 * Created by PhpStorm.
 * User: prabhato
 * Date: 3/24/2017
 * Time: 7:55 PM
 */

include_once (__DIR__) . "/PromotionalMail.inc";
include_once (__DIR__) . "/../template_generator/NewStoriesEmailTemplate.inc";
include_once (__DIR__) . "/../../coolgadgets/PublishingEntity.inc";

class NewStoriesPromotion extends PromotionalMail
{
    var $newStoriesTemplateRender;

    function __construct($conn)
    {
        parent::__construct($conn);
        $this->newStoriesTemplateRender = new NewStoriesEmailTemplate();
    }


    function sendNewStoriesPromotionalMail()
    {
        $coolGadgets = new CoolGadgets($this->conn, EntityType::$ANY);
        $stories = $coolGadgets->getPublishingStories(MailConfig::$noOfNewStoriesPerCronJob);

        if(sizeof($stories) > 0) {
            $users = $this->promotion->getUserDataForNewStoriesPromotion(MailConfig::$noOfEmailsPerCronJob);
            if(sizeof($users) > 0) {
                foreach ($users as $user) {
                    $emailId = $user[PromotionTable::$EMAIL_ID];
                    $emailSent = $user[PromotionTable::$EMAIL_SENT];
                    $subject = $stories[0][CoolGadgetsTable::$NAME];
                    $emailTemplate = $this->newStoriesTemplateRender->generateEmailTemplate($emailId, $stories);
                    $this->_sendMail("Gadgetclues | New stories | $subject", $emailId, $emailTemplate,
                        $this->NEW_STORY, $emailSent);
                }
            } else {
                $this->coolGadgets->setPublishedStatus(PublishingEntity::$PUBLISHED_STATUS, $stories);
            }
        }

    }

}