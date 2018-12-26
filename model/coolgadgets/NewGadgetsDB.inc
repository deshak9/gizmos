<?php

include_once (__DIR__) . "/../sql/Tables/NewGadgetsTable.inc";
include_once (__DIR__) . "/../sql/DbQuery.inc";

/**
 * Created by PhpStorm.
 * User: prabhato
 * Date: 11/23/2016
 * Time: 10:15 PM
 */
class NewGadgetsDB
{
    var $conn;
    var $sqlQuery;

    function __construct($conn)
    {
        $this->conn = $conn;
        $this->sqlQuery = new DbQuery($conn);
    }

    /**
     * @param $name
     * @param $uploadedImageUrls URL should be comma separated
     * @param $description
     * @param $resourcesUrls
     * @param $category
     * @return bool
     */
    function submitNewGadget($name, $uploadedImageUrls, $description, $resourcesUrls, $category)
    {
        $query = "INSERT INTO " . NewGadgetsTable::$TABLE_NAME . " (" . NewGadgetsTable::getAllComaSeparatedColumns() .
            ") VALUES(" .
            NewGadgetsTable::getQuestionMarks() . ")";

        $typeString = NewGadgetsTable::getTypeString();
        $params = array($name, $uploadedImageUrls, $description, $resourcesUrls, $category);

        return $this->sqlQuery->_saveData($query, $typeString, $params);
    }
}