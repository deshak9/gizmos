<?php

/**
 * Created by PhpStorm.
 * User: prabhato
 * Date: 1/22/2017
 * Time: 1:10 PM
 */
class Util
{
    static function checkForDummyEmailId($emailId)
    {
        $length = strlen("de.");
        return (substr($emailId, 0, $length) === "de.");
    }
}