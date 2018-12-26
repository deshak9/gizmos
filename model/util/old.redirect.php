<?php
/**
 * Created by PhpStorm.
 * User: prabhato
 * Date: 3/31/2017
 * Time: 8:46 AM
 */

include_once (__DIR__) . "/../coolgadgets/RedirectDB.inc";
include_once (__DIR__) . "/../sql/Tables/RedirectTable.inc";

$uri_path = parse_url($_SERVER['REQUEST_URI'], PHP_URL_PATH);

$redirectDB = new RedirectDB($conn);

$redirectInfo = $redirectDB->getDataByOldUrl($uri_path);

if(sizeof($redirectInfo) > 0) {
    $targetUrl = $redirectInfo[0][RedirectTable::$NEW_URL];
    header('location: ' . $targetUrl);
    die();
}