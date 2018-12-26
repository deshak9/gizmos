<?php

/**
 * Created by PhpStorm.
 * User: prabhato
 * Date: 1/22/2017
 * Time: 11:55 AM
 */
class PromotionTable
{
    public static $TABLE_NAME = "promotion";

    public static $EMAIL_ID = "EMAIL_ID";
    public static $COUNTRY = "COUNTRY";
    public static $VALID_EMAIL = "VALID_EMAIL";
    public static $TOP10_STATUS = "TOP10_STATUS";
    public static $NEW_GADGET_STATUS = "NEW_GADGET_STATUS";
    public static $NEW_STORIES_STATUS = "NEW_STORIES_STATUS";
    public static $USER_INTERACTION = "USER_INTERACTION";
    public static $EMAIL_SENT = "EMAIL_SENT";

    public static function getAllComaSeparatedColumns()
    {
        return PromotionTable::$EMAIL_ID . "," .
        PromotionTable::$COUNTRY . "," .
        PromotionTable::$VALID_EMAIL . "," .
        PromotionTable::$TOP10_STATUS . "," .
        PromotionTable::$NEW_GADGET_STATUS . "," .
        PromotionTable::$USER_INTERACTION . "," .
        PromotionTable::$EMAIL_SENT;
    }

    public static function getTypeString()
    {
        return "sssiiii";
    }

    public static function getQuestionMarks()
    {
        return "?,?,?,?,?,?,?";
    }
}