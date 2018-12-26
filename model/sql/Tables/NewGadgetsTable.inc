<?php

/**
 * Created by PhpStorm.
 * User: prabhato
 * Date: 11/23/2016
 * Time: 10:19 PM
 */
class NewGadgetsTable
{
    public static $TABLE_NAME = "new_gadgets";
    public static $NAME = "NAME";
    public static $UPLOADED_IMAGE = "UPLOADED_IMAGE";
    public static $DESCRIPTION = "DESCRIPTION";
    public static $RESOURCES_URL = "RESOURCES_URL";
    public static $CATEGORY = "CATEGORY";

    public static function getAllComaSeparatedColumns()
    {
        return NewGadgetsTable::$NAME . "," .
        NewGadgetsTable::$UPLOADED_IMAGE . "," .
        NewGadgetsTable::$DESCRIPTION . "," .
        NewGadgetsTable::$RESOURCES_URL . "," .
        NewGadgetsTable::$CATEGORY;
    }

    public static function getTypeString()
    {
        return "sssss";
    }

    public static function getQuestionMarks(){
        return "?,?,?,?,?";
    }

}