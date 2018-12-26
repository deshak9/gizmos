<?php
/**
 * Created by PhpStorm.
 * User: prabhato
 * Date: 1/24/2017
 * Time: 3:42 PM
 */

include_once (__DIR__) . "/DeploymentEnvironment.php";

function getHostUrl()
{
    if(isProd()) {
        return "http://www.gadgetclues.com";
    }
    return "http://localhost";
}