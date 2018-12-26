<?php

/**
 * Created by PhpStorm.
 * User: prabhato
 * Date: 1/30/2017
 * Time: 7:59 PM
 */

include_once (__DIR__) . "/PromotionalMail.inc";
include_once (__DIR__) . "/../template_generator/NewGadgetEmailTemplate.inc";

class NewGadgetPromotion extends PromotionalMail
{
    var $newGadgetTemplateRender;

    function __construct($conn)
    {
        parent::__construct($conn);
        $this->newGadgetTemplateRender = new NewGadgetEmailTemplate();
    }

    function sendNewGadgetPromotionalMail()
    {
        $gadgets = $this->coolGadgets->getPublishingGadgets(MailConfig::$noOfNewGadgetEmailsPerCronJob);
        if(sizeof($gadgets) > 0) {
            $users = $this->promotion->getUserDataForNewGadgetPromotion(MailConfig::$noOfEmailsPerCronJob);
            if(sizeof($users) > 0) {
                foreach ($users as $user) {
                    $emailId = $user[PromotionTable::$EMAIL_ID];
                    $emailSent = $user[PromotionTable::$EMAIL_SENT];
                    $emailTemplate = $this->newGadgetTemplateRender->generateEmailTemplate($emailId, $gadgets);
                    $this->_sendMail("Gadgets added to our store recently", $emailId, $emailTemplate,
                        "NEW_GADGET", $emailSent);
                }
            } else {
                $this->coolGadgets->setPublishedStatus('PUBLISHED', $gadgets);
            }
        }
    }
}