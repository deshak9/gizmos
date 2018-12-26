<?php
/**
 * Created by PhpStorm.
 * User: prabhato
 * Date: 2/26/2017
 * Time: 11:40 AM
 */

include_once (__DIR__) . "/../../dbutils/dbConnection.php";
include_once (__DIR__) . "/../../coolgadgets/Promotion.inc";
include_once (__DIR__) . "/../../coolgadgets/CoolGadgets.inc";
include_once (__DIR__) . "/../../../config/mail.config.php";
include_once (__DIR__) . "/../../../model/coolgadgets/EntityType.inc";

function scheduleNewGadgetsMail($UIR)
{
    $conn = createConnection();
    $coolGadgets = new CoolGadgets($conn, EntityType::$GADGET);

    $newGadgets = $coolGadgets->getNewGadgets(MailConfig::$noOfNewGadgetEmailsPerCronJob);
    if(sizeof($newGadgets) == MailConfig::$noOfNewGadgetEmailsPerCronJob) {
        $promotion = new Promotion($conn);
        if($promotion->updateNewGadgetSchedulerJob($UIR)) {
            $coolGadgets->setPublishedStatus("PUBLISHING", $newGadgets);
        }
    }
}
