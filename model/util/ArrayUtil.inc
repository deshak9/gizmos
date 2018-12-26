<?php

/**
 * Created by PhpStorm.
 * User: prabhato
 * Date: 11/26/2016
 * Time: 9:11 PM
 */
class ArrayUtil
{
    public static function addOneEntryToArrayOfArray($arrayOfArray, $entryName, $entryValue)
    {
        for ($i = 0; $i < count($arrayOfArray); $i++) {
            $arrayOfArray[$i] = ArrayUtil::addOneEntryToArray($arrayOfArray[$i], $entryName, $entryValue);
        }
        return $arrayOfArray;
    }

    public static function addOneEntryToArray($theArray, $entryName, $entryValue)
    {
        $theArray[$entryName] = $entryValue;
        return $theArray;
    }

}