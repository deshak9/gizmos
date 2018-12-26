<?php

/**
 * Created by PhpStorm.
 * User: prabhato
 * Date: 11/24/2016
 * Time: 9:56 AM
 */

include_once (__DIR__) . "/../util/DateUtil.php";
include_once (__DIR__) . "/../sql/DbQuery.inc";
include_once (__DIR__) . "/../sql/Tables/UserAccountsTable.inc";

class UserDetailsDB
{
    var $conn;
    var $sqlQuery;

    function __construct($conn)
    {
        $this->conn = $conn;
        $this->sqlQuery = new DbQuery($conn);
    }

    function updateColumns($columnNames, $type, $values, $emailId)
    {
        $columnsToBeUpdated = "SET ";

        foreach ($columnNames as $column) {
            $columnsToBeUpdated .= $column . "=?,";
        }

        $columnsToBeUpdated = rtrim($columnsToBeUpdated, ",");
        $query = "UPDATE " . UserAccountsTable::$TABLE_NAME . " " . $columnsToBeUpdated . " WHERE "
            . UserAccountsTable::$EMAIL_ID . "=?";

        $params = array_merge($values, array($emailId));
        return $this->sqlQuery->_updateAColumn($query, $type, $params);
    }

    function insertData($userName, $emailId, $UID, $hashedPassword, $hashedCookie)
    {
        $query = "INSERT INTO " . UserAccountsTable::$TABLE_NAME . " (" . UserAccountsTable::getAllComaSeparatedColumns()
            . ") VALUES(" . UserAccountsTable::getQuestionMarks() . ")";
        $currentDate = DateUtil::getCurrentDate();
        $params = array($userName, $emailId, $UID, $hashedPassword, $hashedCookie, null, null, $currentDate);

        return $this->sqlQuery->_insertData($query, "ssssssss", $params);
    }

    function getUserByEmailId($emailId)
    {
        $query = "SELECT * FROM " . UserAccountsTable::$TABLE_NAME . " WHERE " . UserAccountsTable::$EMAIL_ID .
            "=?";
        $params = array($emailId);
        return $this->sqlQuery->_fetchAllData($query, "s", $params);
    }

    function getUserByColumnName($columnName, $columnValue)
    {
        $query = "SELECT * FROM " . UserAccountsTable::$TABLE_NAME . " WHERE " . $columnName .
            "=?";
        $params = array($columnValue);
        return $this->sqlQuery->_fetchAllData($query, "s", $params);
    }

    function getUserByCookie($cookie)
    {
        $query = "SELECT * FROM " . UserAccountsTable::$TABLE_NAME . " WHERE " . UserAccountsTable::$COOKIE .
            "=?";
        $params = array($cookie);
        return $this->sqlQuery->_fetchAllData($query, "s", $params);
    }
}