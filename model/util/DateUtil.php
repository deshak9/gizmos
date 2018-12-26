<?php

/**
 * Created by PhpStorm.
 * User: prabhato
 * Date: 12/16/2016
 * Time: 9:29 AM
 */
class DateUtil
{
    static function getCurrentDate()
    {
        return strtotime(date('m/d/Y', time()));
    }

    static function moreThanYesterday($initialDate)
    {
        $result = DateUtil::getCurrentDate() - $initialDate;
        return $result == 0 ? false : true;
    }
}