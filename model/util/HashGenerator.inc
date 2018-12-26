<?php

/**
 * Created by PhpStorm.
 * User: prabhato
 * Date: 12/18/2016
 * Time: 12:23 AM
 */
class HashGenerator
{

    static function getHashedValue($text, $hashLength)
    {
        $hashedValue = HashGenerator::hashValue($text);
        $hashLength = count($hashedValue) - $hashLength;
        $hashLength = $hashLength > 0 ? $hashLength : 0;
        return substr($hashedValue, $hashLength);
    }

    static function hashValue($text)
    {
        return sha1($text);
    }

    static function getRestPasswordHash($text)
    {
        $hashedValue = HashGenerator::hashValue($text);
        return $hashedValue . HashGenerator::hashValue($hashedValue);
    }

    static function getRandomInt()
    {
        return mt_rand(100000, 1000000000);
    }

    static function encodeDoubleBase64($text)
    {
        return base64_encode(base64_encode(trim($text)));
    }

    static function decodeDoubleBase64($text)
    {
        return base64_decode(base64_decode(trim($text)));
    }
}