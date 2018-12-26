<?php

/**
 * Created by PhpStorm.
 * User: prabhato
 * Date: 3/18/2017
 * Time: 1:42 PM
 */

include_once (__DIR__) . "/../sql/Tables/BlogContentTable.inc";

class BlogContentDB
{
    var $conn;
    var $sqlQuery;

    function __construct($conn)
    {
        $this->conn = $conn;
        $this->sqlQuery = new DbQuery($conn);
    }

    function getBlogContentById($productId)
    {
        $query = "SELECT * FROM " . BlogContentTable::$TABLE_NAME . " WHERE " . BlogContentTable::$PRODUCT_ID
            . "=?";
        $params = array($productId);
        return $this->sqlQuery->_fetchAllData($query, "s", $params);
    }

    function submitBlogContentById($productId, $content)
    {
        $query = "INSERT INTO " . BlogContentTable::$TABLE_NAME . " (" . BlogContentTable::getAllComaSeparatedColumns() .
            ") VALUES(" .
            BlogContentTable::getQuestionMarks() . ")";
        $typeString = BlogContentTable::getTypeString();
        $params = array($productId, $content);

        return $this->sqlQuery->_saveData($query, $typeString, $params);
    }

    function updateBlogContentById($productId, $content)
    {
        $query = "UPDATE " . BlogContentTable::$TABLE_NAME . " SET " .
            BlogContentTable::$CONTENT . "=? WHERE " .
            BlogContentTable::$PRODUCT_ID . "=?";

        $params = array($content, $productId);

        return $this->sqlQuery->_saveData($query, "ss", $params);
    }

}