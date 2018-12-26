<?php

/**
 * Created by PhpStorm.
 * User: prabhato
 * Date: 2/25/2017
 * Time: 4:19 PM
 */
class GenericMetaData
{
    public static $title = "Gadgets | Cool Gadgets | Gadget review | tech news";
    public static $description = "Gadget Clues is home to some of the coolest gadgets, gadget review, technology news and their availability in online shopping stores.";

    public static function setTitle($text)
    {
        return ($text && $text != "") ? $text . " | cool gadgets" : GenericMetaData::$title;
    }

    public static function setStoriesTitle($text)
    {
        return ($text && $text != "") ? $text . " | tech news" : GenericMetaData::$title;
    }

    public static function setReviewsTitle($text)
    {
        return ($text && $text != "") ? $text . " | gadget reviews" : GenericMetaData::$title;
    }

    public static function setDescription($text)
    {
        return ($text && $text != "") ? $text : GenericMetaData::$description;
    }
}