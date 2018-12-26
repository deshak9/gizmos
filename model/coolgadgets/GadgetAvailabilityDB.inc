<?php

/**
 * Created by PhpStorm.
 * User: prabhato
 * Date: 11/23/2016
 * Time: 11:29 PM
 */

include_once (__DIR__) . "/../sql/Tables/GadgetAvailabilityTable.inc";

class GadgetAvailabilityDB
{
    var $conn;
    var $sqlQuery;

    function __construct($conn)
    {
        $this->conn = $conn;
        $this->sqlQuery = new DbQuery($conn);
    }

    function getGadgetAvailability($productId, $country)
    {
        $query = "SELECT * FROM " . GadgetAvailabilityTable::$TABLE_NAME . " WHERE " . GadgetAvailabilityTable::$PRODUCT_ID
            . "=? AND " . GadgetAvailabilityTable::$COUNTRY . "=?";

        $params = array($productId, $country);

        return $this->sqlQuery->_fetchAllData($query, "ss", $params);
    }

    function submitGadgetAvailability($productId, $storeName, $storeUrl, $affUid, $country)
    {
        $query = "INSERT INTO " . GadgetAvailabilityTable::$TABLE_NAME . " ("
            . GadgetAvailabilityTable::getAllComaSeparatedColumns() . ") VALUES("
            . GadgetAvailabilityTable::getQuestionMarks() . ")";

        $typeString = GadgetAvailabilityTable::getTypeString();
        $params = array($productId, $storeName, $storeUrl, $affUid, $country);

        return $this->sqlQuery->_saveData($query, $typeString, $params);
    }
}