<?php

include_once (__DIR__) . "/../model/coolgadgets/CoolGadgets.inc";
include_once (__DIR__) . "/../model/sql/Tables/CoolGadgetsTable.inc";


function getGadgetsMenuList($conn)
{
    $coolGadget = new CoolGadgets($conn, EntityType::$GADGET);
    $categories = $coolGadget->getAllCategories();
    return listGenerator($categories, "cool-gadgets/categories");
}

function getStoriesMenuList($conn)
{

    $coolGadget = new CoolGadgets($conn, EntityType::$STORY);
    $stories = $coolGadget->getStoryNamesAndIdWithRange();
    $result = "";
    foreach ($stories as $entry) {
        $name = $entry[CoolGadgetsTable::$NAME];
        $encodedEntry = str_replace(" ", "-", trim($name));
        $targetUrl = "/stories/$encodedEntry";
        $result .= "<li><a href='$targetUrl'>" . $name . "</a></li>";
    }
    return $result;
}

function listGenerator($data, $contextPath)
{
    $result = "";
    foreach ($data as $entry) {
        $encodedEntry = str_replace(" ", "-", trim($entry));
        $targetUrl = "/$contextPath/$encodedEntry";
        $result .= "<li><a href='$targetUrl'>$entry</a></li>";
    }
    return $result;
}