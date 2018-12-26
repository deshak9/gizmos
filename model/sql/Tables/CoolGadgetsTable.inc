<?php

/**
 * Created by PhpStorm.
 * User: prabhato
 * Date: 11/22/2016
 * Time: 10:52 AM
 */
class CoolGadgetsTable
{
    public static $TABLE_NAME = "cool_gadgets";
    public static $IS_ON = "IS_ON";
    public static $PRODUCT_ID = "PRODUCT_ID";
    public static $TYPE = "TYPE";
    public static $NAME = "NAME";
    public static $CATEGORY = "CATEGORY";
    public static $IMAGE_URL = "IMAGE_URL";
    public static $DESCRIPTION = "DESCRIPTION";
    public static $TARGET_LINK = "TARGET_LINK";
    public static $LIKES = "LIKES";
    public static $NO_OF_VIEW = "NO_OF_VIEW";
    public static $OWN_POPULARITY = "OWN_POPULARITY"; // Should be in range 0-10, with 10 as very popular
    public static $COUNTRY = "COUNTRY";
    public static $PUBLISHED_STATUS = "PUBLISHED_STATUS";
    public static $VIDEO_URL = "VIDEO_URL";
    public static $IMAGE_1 = "IMAGE_1";
    public static $IMAGE_2 = "IMAGE_2";
    public static $IMAGE_3 = "IMAGE_3";
    public static $IMAGE_4 = "IMAGE_4";
    public static $IMAGE_5 = "IMAGE_5";

    public static function getAllComaSeparatedColumns()
    {
        return CoolGadgetsTable::$IS_ON . "," .
        CoolGadgetsTable::$PRODUCT_ID . "," .
        CoolGadgetsTable::$TYPE . "," .
        CoolGadgetsTable::$NAME . "," .
        CoolGadgetsTable::$CATEGORY . "," .
        CoolGadgetsTable::$IMAGE_URL . "," .
        CoolGadgetsTable::$DESCRIPTION . "," .
        CoolGadgetsTable::$TARGET_LINK . "," .
        CoolGadgetsTable::$LIKES . "," .
        CoolGadgetsTable::$OWN_POPULARITY . "," .
        CoolGadgetsTable::$COUNTRY . "," .
        CoolGadgetsTable::$PUBLISHED_STATUS . "," .
        CoolGadgetsTable::$VIDEO_URL . "," .
        CoolGadgetsTable::$IMAGE_1 . "," .
        CoolGadgetsTable::$IMAGE_2 . "," .
        CoolGadgetsTable::$IMAGE_3 . "," .
        CoolGadgetsTable::$IMAGE_4 . "," .
        CoolGadgetsTable::$IMAGE_5;
    }

    public static function updateAllColumn()
    {
        return CoolGadgetsTable::$IS_ON . "=?," .
        CoolGadgetsTable::$PRODUCT_ID . "=?," .
        CoolGadgetsTable::$TYPE . "=?," .
        CoolGadgetsTable::$NAME . "=?," .
        CoolGadgetsTable::$CATEGORY . "=?," .
        CoolGadgetsTable::$IMAGE_URL . "=?," .
        CoolGadgetsTable::$DESCRIPTION . "=?," .
        CoolGadgetsTable::$TARGET_LINK . "=?," .
        CoolGadgetsTable::$LIKES . "=?," .
        CoolGadgetsTable::$OWN_POPULARITY . "=?," .
        CoolGadgetsTable::$COUNTRY . "=?," .
        CoolGadgetsTable::$PUBLISHED_STATUS . "=?," .
        CoolGadgetsTable::$VIDEO_URL . "=?," .
        CoolGadgetsTable::$IMAGE_1 . "=?," .
        CoolGadgetsTable::$IMAGE_2 . "=?," .
        CoolGadgetsTable::$IMAGE_3 . "=?," .
        CoolGadgetsTable::$IMAGE_4 . "=?," .
        CoolGadgetsTable::$IMAGE_5 . "=?";
    }

    public static function getTypeString()
    {
        return "ssssssssiissssssss";
    }

    public static function getQuestionMarks()
    {
        return "?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?";
    }
}