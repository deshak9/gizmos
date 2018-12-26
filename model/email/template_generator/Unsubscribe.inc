<?php

/**
 * Created by PhpStorm.
 * User: prabhato
 * Date: 2/19/2017
 * Time: 12:24 PM
 */

include_once (__DIR__) . "/../../../config/server.details.php";

class Unsubscribe
{
    static function getUnsubscribeLink($emailId)
    {
        return getHostUrl() . "/util/unsubscribe/index.php?_e=" . base64_encode(base64_encode($emailId));
    }
}