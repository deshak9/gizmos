<?php
/**
 * Created by PhpStorm.
 * User: prabhato
 * Date: 1/23/2017
 * Time: 4:26 PM
 */
include_once (__DIR__) . "/../../../config/server.details.php";
include_once (__DIR__) . "/../../sql/Tables/CoolGadgetsTable.inc";
include_once (__DIR__) . "/../../util/HashGenerator.inc";

function generateGadgetCards($data, $emailId)
{
    $count = 1;
    $cards = "<tr>";
    foreach ($data as $row) {
        $cards .= "<td style='padding: 15px;background: #FFF;'>";
        $name = $row[CoolGadgetsTable::$NAME];
        $imageUrl = getHostUrl() . $row[CoolGadgetsTable::$IMAGE_URL];
        $description = $row[CoolGadgetsTable::$DESCRIPTION];
        $pageName = str_replace(' ', '-', $name);
        $cardUrl = getHostUrl() . "/gadgets/$pageName"
            . "?_r=email&_e=" . HashGenerator::encodeDoubleBase64($emailId);

        $cards .= "<div style='width: 100%;background: #fefefe;'>";

        $cards .= "<a href='$cardUrl' style='width: 100%;height:200px;display:block;background: url(" . $imageUrl .
            ")50% 50% / cover no-repeat;'></a>";
        //"<img style='width:100%;' src='$imageUrl'>";
        $cards .= "<a style='font-size:16px;font-weight:600;text-align: left;margin-top:0;padding: 15px 5px 0 5px;text-transform:capitalize;text-decoration: none;display:block;color: #444;' href='$cardUrl'>$name</a>";
        $cards .= "<div style='width: 100%;margin-top:5px;height: 70px;overflow: hidden;text-overflow: ellipsis;'> "
            . "<p style='padding:0 5px;font-size: 12px;line-height:17px;color: #7a6a7a;margin-top:1px;'>$description</p></div>";
        $cards .= "</div>";
        $cards .= "</td>";
        if($count % 2 == 0) {
            $cards .= "</tr><tr>";
        }

        $count++;

    }

    $cards .= "</tr>";

    return "<table style='width: 100%;background:#f5f5e8;table-layout: fixed;'>" . $cards . "</table>";
}