<?php

/**
 * Created by PhpStorm.
 * User: prabhato
 * Date: 1/24/2017
 * Time: 5:07 PM
 */

include_once (__DIR__) . "/PromotionalMail.inc";

class Top10GadgetPromotion extends PromotionalMail
{


    function __construct($conn)
    {
        parent::__construct($conn);
    }

    function sendTop10PromotionalMail()
    {
        $this->sendPromotionalMail("Top 10 gadgets of this week",
            $this->TOP_10, MailConfig::$noOfEmailsPerCronJob, MailConfig::$noOfTop10EmailsPerCronJob);
    }
}