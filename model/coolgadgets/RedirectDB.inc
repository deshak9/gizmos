<?php

/**
 * Created by PhpStorm.
 * User: prabhato
 * Date: 3/30/2017
 * Time: 10:35 PM
 */

include_once (__DIR__) . "/../sql/Tables/RedirectTable.inc";
include_once (__DIR__) . "/../sql/DbQuery.inc";

class RedirectDB
{
    var $conn;
    var $sqlQuery;

    function __construct($conn)
    {
        $this->conn = $conn;
        $this->sqlQuery = new DbQuery($conn);
    }


    function submitNewRedirectEntry($oldUrl, $newUrl)
    {
        $query = "INSERT INTO " . RedirectTable::$TABLE_NAME . " ("
            . RedirectTable::getAllComaSeparatedColumns() . ") VALUES("
            . RedirectTable::getQuestionMarks() . ")";

        $typeString = RedirectTable::getTypeString();
        $params = array($oldUrl, $newUrl);

        return $this->sqlQuery->_saveData($query, $typeString, $params);
    }

    function getDataByOldUrl($oldUrl)
    {
        $query = "SELECT * FROM " . RedirectTable::$TABLE_NAME . " WHERE " . RedirectTable::$OLD_URL
            . "=?";

        $params = array($oldUrl);

        return $this->sqlQuery->_fetchAllData($query, "s", $params);
    }
}