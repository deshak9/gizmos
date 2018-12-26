<!DOCTYPE html>
<?php

include_once (__DIR__) . '/../../model/dbutils/dbConnection.php';
$conn = createConnection();

include_once (__DIR__) . '/../../model/login/validatecookie.inc';
include_once (__DIR__) . "/../../model/login/BccKey.inc";
include_once (__DIR__) . "/../../model/coolgadgets/CoolGadgetsDB.inc";
include_once (__DIR__) . "/../../model/coolgadgets/EntityType.inc";

$coolGadgets = new CoolGadgetsDB($conn, EntityType::$GADGET);
$bccKey = new BccKey();
$bccKey->setBccKey();

?>
<html class="no-js" lang="en-US" prefix="og: http://ogp.me/ns#">
<head>
    <title></title>
    <base href="./">

    <link rel="stylesheet" type="text/css" href="./common.css">
    <!-- Latest compiled and minified CSS -->
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css"
          integrity="sha384-BVYiiSIFeK1dGmJRAkycuHAHRg32OmUcww7on3RYdg4Va+PmSTsz/K68vbdEjh4u" crossorigin="anonymous">

    <!-- Optional theme -->
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap-theme.min.css"
          integrity="sha384-rHyoN1iRsVXV4nD0JutlnGaslCJuC7uwjduW9SVrLvRYooPp2bWYgmgJQIXwl/Sp" crossorigin="anonymous">

    <!-- Jquery -->
    <script
        src="https://code.jquery.com/jquery-3.1.1.slim.min.js"
        integrity="sha256-/SIrNqv8h6QGKDuNoLGA4iret+kyesCkHGzVUUV0shc="
        crossorigin="anonymous"></script>

</head>

<body style="width: 960px;margin-left: auto;margin-right: auto;margin-top:50px;">

<App id="app"></App>

<div style="clear:both;width:100%;background#433;margin-top:20px;height:20px;"></div>
<script src="/jonu/admin/public/bundle.js" type="text/javascript"></script>

<!-- Latest compiled and minified JavaScript -->
<script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js"
        integrity="sha384-Tc5IQib027qvyjSMfHjOMaLkfuWVxZxUPnCJA7l2mCWNIpG9mGCD8wGNIcPD7Txa"
        crossorigin="anonymous"></script>
</body>
</html>