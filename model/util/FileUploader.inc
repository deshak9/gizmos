<?php

/**
 * Created by PhpStorm.
 * User: prabhato
 * Date: 11/26/2016
 * Time: 9:11 PM
 */
class FileUploader
{
    static function uploadImages($path, $files)
    {
        foreach ($files as $file) {
            $name = $file['name'];
            move_uploaded_file($file['tmp_name'], $_SERVER['DOCUMENT_ROOT'] . $path . $name);
        }

    }
}