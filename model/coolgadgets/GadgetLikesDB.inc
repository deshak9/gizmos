<?php

include_once (__DIR__) . "/../sql/Tables/GadgetLikesTable.inc";
require_once (__DIR__) . "/../sql/DbQuery.inc";

/**
 * Created by PhpStorm.
 * User: prabhato
 * Date: 11/24/2016
 * Time: 10:34 PM
 */
class GadgetLikesDB
{
    var $conn;
    var $sqlQuery;

    function __construct($conn)
    {
        $this->conn = $conn;
        $this->sqlQuery = new DbQuery($conn);
    }

    function saveNewLike($UID, $productId)
    {
        $query = "INSERT INTO " . GadgetLikesTable::$TABLE_NAME . " (" . GadgetLikesTable::getAllComaSeparatedColumns() .
            ") VALUES(" .
            GadgetLikesTable::getQuestionMarks() . ")";

        $typeString = GadgetLikesTable::getTypeString();
        $params = array($UID, $productId);

        return $this->sqlQuery->_saveData($query, $typeString, $params);
    }

    function getAllLikedProductIdForAnUser($UID)
    {
        $query = "SELECT " . GadgetLikesTable::$PRODUCT_ID . " FROM " . GadgetLikesTable::$TABLE_NAME . " WHERE "
            . GadgetLikesTable::$UID . "=?";

        $params = array($UID);

        $productIds = $this->sqlQuery->_fetchSingleColumnData($query, "s", $params);

        return $this->convertToArray($productIds);
    }

    private function convertToArray($productIds)
    {
        $result = array();
        if ($productIds) {
            $result[$productIds[0][GadgetLikesTable::$PRODUCT_ID]] = 1;
            for ($i = 1; $i < count($productIds); $i++) {
                $result[$productIds[$i][GadgetLikesTable::$PRODUCT_ID]] = 1;
            }
        }

        return $result;
    }
}