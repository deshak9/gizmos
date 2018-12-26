<?php

/**
 * Created by PhpStorm.
 * User: prabhato
 * Date: 3/30/2017
 * Time: 10:30 PM
 */
class RedirectTable
{
    public static $TABLE_NAME = "redirect";

    public static $OLD_URL = "OLD_URL";
    public static $NEW_URL = "NEW_URL";

    public static function getAllComaSeparatedColumns()
    {
        return RedirectTable::$OLD_URL . "," .
        RedirectTable::$NEW_URL;
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