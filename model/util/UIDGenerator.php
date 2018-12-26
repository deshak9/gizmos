<?php

include_once (__DIR__) . "/HashGenerator.inc";

/**
 * Created by PhpStorm.
 * User: prabhato
 * Date: 12/17/2016
 * Time: 1:47 AM
 */
class UIDGenerator
{
    static function getUID($text)
    {
        return HashGenerator::hashValue($text);
    }

    static function getDummyEmailId($postfixText)
    {
        return 'de.' . $postfixText . '@gmail.com';
    }

}