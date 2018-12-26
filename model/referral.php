<?php
/**
 * Created by PhpStorm.
 * User: prabhato
 * Date: 2/20/2017
 * Time: 11:01 PM
 */

include_once (__DIR__) . "/coolgadgets/Promotion.inc";

if(isset($_GET['_r'])) {
    $referral = $_GET['_r'];

    switch ($referral) {
        case "email" :
            if(isset($_GET['_e'])) {
                $encodedEmailId = $_GET['_e'];
                $promotion = new Promotion($conn);
                $promotion->updateEmailUserInteractionCount($encodedEmailId);
                unset($_GET['_e']);
            }
            break;
        default :
            break;
    }

    unset($_GET['_r']);
    $_SERVER["REQUEST_URI"] = strtok($_SERVER["REQUEST_URI"], '?');
}