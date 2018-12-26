<?php

/**
 * Created by PhpStorm.
 * User: prabhato
 * Date: 11/24/2016
 * Time: 10:28 PM
 */
class GadgetLikesTable
{
    public static $TABLE_NAME = "gadget_likes";
    public static $UID = "UID";
    public static $PRODUCT_ID = "PRODUCT_ID";

    public static function getAllComaSeparatedColumns()
    {
        return GadgetLikesTable::$UID . "," .
        GadgetLikesTable::$PRODUCT_ID;
    }

    public static function getTypeString()
    {
        return "ss";
    }

    public static function getQuestionMarks()
    {
        return "?,?";
    }
}