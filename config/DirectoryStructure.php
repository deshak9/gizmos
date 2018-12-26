<?php
include $_SERVER['DOCUMENT_ROOT'] . "/config/DeploymentEnvironment.php";

function getDirectoryStructure()
{
    if (isProd()) {
        return "";
    } else {
        return "/test";
    }
}

?>