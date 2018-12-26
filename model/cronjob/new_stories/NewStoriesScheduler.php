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
include_once (__DIR__) . "/../../../model/coolgadgets/PublishingEntity.inc";

function scheduleNewStoriesMail($UIR)
{
    $conn = createConnection();
    $coolGadgets = new CoolGadgets($conn, EntityType::$ANY);

    $newStories = $coolGadgets->getNewStories(MailConfig::$noOfNewStoriesPerCronJob);
    if(sizeof($newStories) == MailConfig::$noOfNewStoriesPerCronJob) {
        $promotion = new Promotion($conn);
        if($promotion->updateNewStoriesSchedulerJob($UIR)) {
            $coolGadgets->setPublishedStatus(PublishingEntity::$PUBLISHING_STATUS, $newStories);
        }
    }
}
