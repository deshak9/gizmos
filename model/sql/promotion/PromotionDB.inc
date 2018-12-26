<?php

include_once (__DIR__) . "/../Tables/PromotionTable.inc";
include_once (__DIR__) . "/../DbQuery.inc";

/**
 * Created by PhpStorm.
 * User: prabhato
 * Date: 11/23/2016
 * Time: 10:15 PM
 */
class PromotionDB
{
    var $conn;
    var $sqlQuery;
    var $tableName;
    var $questionMark;
    var $queryString;

    function __construct($conn)
    {
        $this->conn = $conn;
        $this->sqlQuery = new DbQuery($conn);
        $this->tableName = PromotionTable::$TABLE_NAME;
        $this->questionMark = PromotionTable::getQuestionMarks();
        $this->queryString = PromotionTable::getTypeString();
    }

    function submitNewEntry($emailId, $country, $validEmail, $top10Status, $newGadgetStatus,
                            $userInteraction, $emailSent)
    {
        $query = "INSERT INTO " . $this->tableName . " (" . PromotionTable::getAllComaSeparatedColumns() .
            ") VALUES(" . $this->questionMark . ")";

        $typeString = $this->queryString;
        $params = array($emailId, $country, $validEmail, $top10Status, $newGadgetStatus, $userInteraction, $emailSent);

        return $this->sqlQuery->_saveData($query, $typeString, $params);
    }

    function updateAColumn($columnName, $type, $value, $emailId)
    {
        $query = "UPDATE " . $this->tableName . " SET " . $columnName . "=? WHERE "
            . PromotionTable::$EMAIL_ID . "=?";

        $params = array($value, $emailId);

        return $this->sqlQuery->_updateAColumn($query, $type, $params);
    }

    function updateAColumnCount($columnName, $emailId)
    {
        $query = "UPDATE " . $this->tableName . " SET " . $columnName . "=" . $columnName . "+1 WHERE "
            . PromotionTable::$EMAIL_ID . "=?";

        $params = array($emailId);

        return $this->sqlQuery->_updateAColumn($query, "s", $params);
    }

    function updateAColumnWithMailSentCount($columnName, $type, $value, $emailId)
    {
        $query = "UPDATE " . $this->tableName . " SET " . $columnName . "=?, " . PromotionTable::$EMAIL_SENT
            . "=" . PromotionTable::$EMAIL_SENT . "+1 WHERE "
            . PromotionTable::$EMAIL_ID . "=?";

        $params = array($value, $emailId);

        return $this->sqlQuery->_updateAColumn($query, $type, $params);
    }

    function getDataByEmailId($emailId)
    {
        $query = "SELECT * FROM " . PromotionTable::$TABLE_NAME . " WHERE " . PromotionTable::$EMAIL_ID .
            "=?";
        $params = array($emailId);
        return $this->sqlQuery->_fetchAllData($query, "s", $params);
    }

    function getDataByLimit($limit, $promotionTypeStatus)
    {
        $query = "SELECT * FROM " . PromotionTable::$TABLE_NAME . " WHERE {$promotionTypeStatus}=1 AND " .
            PromotionTable::$VALID_EMAIL . "='YES' LIMIT " . $limit;
        return $this->sqlQuery->_fetchWithoutPreparedStatement($query);
    }

    function updateCronSchedulerJob($columnName, $UIR)
    {
        $query = "UPDATE " . $this->tableName . " SET " . $columnName . "=1 WHERE "
            . PromotionTable::$VALID_EMAIL . "='YES' AND " . PromotionTable::$USER_INTERACTION . ">0 AND " . PromotionTable::$EMAIL_SENT . "/"
            . PromotionTable::$USER_INTERACTION . "<?";

        $params = array($UIR);
        return $this->sqlQuery->_updateAColumn($query, "i", $params);
    }

}