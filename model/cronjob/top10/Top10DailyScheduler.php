<?php
/**
 * Created by PhpStorm.
 * User: prabhato
 * Date: 2/22/2017
 * Time: 10:38 AM
 */

include_once (__DIR__) . "/../../dbutils/dbConnection.php";

$conn = createConnection();
include_once (__DIR__) . "/../../coolgadgets/Promotion.inc";
include_once (__DIR__) . "/../../../config/mail.config.php";

$promotion = new Promotion($conn);
$promotion->updateTop10SchedulerJob(MailConfig::$UIRForDaily);