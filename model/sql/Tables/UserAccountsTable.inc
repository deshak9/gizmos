<?php

/**
 * Created by PhpStorm.
 * User: prabhato
 * Date: 11/24/2016
 * Time: 9:59 AM
 */
class UserAccountsTable
{
    public static $TABLE_NAME = "user_accounts";
    public static $NAME = "NAME";
    public static $EMAIL_ID = "EMAIL_ID";
    public static $UID = "UID";
    public static $PASSWORD = "PASSWORD";
    public static $COOKIE = "COOKIE";
    public static $FORGOT_PASSWORD_LINK = "FORGOT_PASSWORD_LINK";
    public static $FORGOT_PASSWORD_LINK_VALIDITY = "FORGOT_PASSWORD_LINK_VALIDITY";
    public static $CREATE_DATE = "CREATE_DATE";

    public static function getAllComaSeparatedColumns()
    {
        return UserAccountsTable::$NAME . "," .
        UserAccountsTable::$EMAIL_ID . "," .
        UserAccountsTable::$UID . "," .
        UserAccountsTable::$PASSWORD . "," .
        UserAccountsTable::$COOKIE . "," .
        UserAccountsTable::$FORGOT_PASSWORD_LINK . "," .
        UserAccountsTable::$FORGOT_PASSWORD_LINK_VALIDITY . "," .
        UserAccountsTable::$CREATE_DATE;
    }

    public static function getTypeString()
    {
        return "ssssssss";
    }

    public static function getQuestionMarks()
    {
        return "?,?,?,?,?,?,?,?";
    }
}