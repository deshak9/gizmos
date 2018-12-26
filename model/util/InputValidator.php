<?php

/**
 * Created by PhpStorm.
 * User: prabhato
 * Date: 12/17/2016
 * Time: 11:49 PM
 */
class InputValidator
{
    static function validateEmail($email)
    {
        if(strlen($email) > 100) {
            return false;
        }
        return filter_var($email, FILTER_VALIDATE_EMAIL) !== false;
    }

    static function validateOnlyText($text, $minLength, $maxLength)
    {
        if(strlen($text) > $maxLength || strlen($text) < $minLength) {
            return false;
        }
        return ctype_alpha(str_replace(' ', '', $text));
    }

    static function validateVarCharOnly($text, $maxLength)
    {
        if(strlen($text) > $maxLength) {
            return false;
        }
        return ctype_alnum($text);
    }

    static function validatePassword($password)
    {
        if($password == "") {
            return false;
        }

        return true;
    }
}