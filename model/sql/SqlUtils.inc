<?php

/**
 * Created by PhpStorm.
 * User: prabhato
 * Date: 11/15/2016
 * Time: 4:01 PM
 */
class SqlUtils
{
    var $INSERT_INTO = "INSERT INTO ";

    // All tables
    var $ORDER_TABLE = "Order_Details";

    // All queries//
    var $ORDER_INSERT_QUERY = "";

    function __construct()
    {
        $this->ORDER_INSERT_QUERY = "$this->INSERT_INTO$this->ORDER_TABLE ";
    }


    function _runInsertQuery($query)
    {

    }
}