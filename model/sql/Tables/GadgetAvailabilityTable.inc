<?php

/**
 * Created by PhpStorm.
 * User: prabhato
 * Date: 11/23/2016
 * Time: 11:25 PM
 */
class GadgetAvailabilityTable
{

    public static $TABLE_NAME = "gadget_availability";
    public static $PRODUCT_ID = "PRODUCT_ID";
    public static $STORE_NAME = "STORE_NAME";
    public static $STORE_URL = "STORE_URL";
    public static $AFF_UID = "AFF_UID";
    public static $COUNTRY = "COUNTRY";

    public static function getAllComaSeparatedColumns()
    {
        return GadgetAvailabilityTable::$PRODUCT_ID . "," .
        GadgetAvailabilityTable::$STORE_NAME . "," .
        GadgetAvailabilityTable::$STORE_URL . "," .
        GadgetAvailabilityTable::$AFF_UID . "," .
        GadgetAvailabilityTable::$COUNTRY;
    }

    public static function getTypeString()
    {
        return "sssss";
    }

    public static function getQuestionMarks()
    {
        return "?,?,?,?,?";
    }

}