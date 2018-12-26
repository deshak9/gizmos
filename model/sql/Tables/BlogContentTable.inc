<?php

/**
 * Created by PhpStorm.
 * User: prabhato
 * Date: 3/18/2017
 * Time: 1:44 PM
 */
class BlogContentTable
{
    public static $TABLE_NAME = "blog_content";
    public static $PRODUCT_ID = "PRODUCT_ID";
    public static $CONTENT = "CONTENT";

    public static function getAllComaSeparatedColumns()
    {
        return BlogContentTable::$PRODUCT_ID . "," .
        BlogContentTable::$CONTENT;
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