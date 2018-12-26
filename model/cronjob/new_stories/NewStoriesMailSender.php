<?php
/**
 * Created by PhpStorm.
 * User: prabhato
 * Date: 2/22/2017
 * Time: 10:35 AM
 */

include_once (__DIR__) . "/../../dbutils/dbConnection.php";


$conn = createConnection();
include_once (__DIR__) . "/../../email/promotional_mail/NewStoriesPromotion.inc";

$top10 = new NewStoriesPromotion($conn);
$top10->sendNewStoriesPromotionalMail();