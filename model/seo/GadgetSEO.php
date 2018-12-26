<?php

/**
 * Created by PhpStorm.
 * User: prabhato
 * Date: 2/25/2017
 * Time: 11:42 AM
 */

include_once (__DIR__) . "/../coolgadgets/CoolGadgets.inc";
include_once (__DIR__) . "/../coolgadgets/EntityType.inc";

class GadgetSEO
{

    static function getGadgetInfo($conn)
    {
        $uri = $_SERVER['REQUEST_URI'];
        $gadgetName = explode('/', $uri)[2];
        $gadgetName = trim(str_replace('-', ' ', $gadgetName));
        if($gadgetName != "") {
            $coolGadget = new CoolGadgets($conn, EntityType::$GADGET);
            return $coolGadget->getGadgetInfoByName($gadgetName);
        }
        return Array();
    }
}