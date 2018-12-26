<?php
/**
 * Created by PhpStorm.
 * User: prabhato
 * Date: 12/16/2016
 * Time: 9:31 AM
 */

include_once (__DIR__) . "/model/dbutils/dbConnection.php";
$conn = createConnection();

include_once (__DIR__) . "/model/email/promotional_mail/NewStoriesPromotion.inc";

$love = new NewStoriesPromotion($conn);
$love->sendNewStoriesPromotionalMail();