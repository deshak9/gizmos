<?php

$uri = $_SERVER['REQUEST_URI'];


include_once (__DIR__) . "/../../model/seo/GadgetSEO.php";

include_once (__DIR__) . "/../../model/dbutils/dbConnection.php";
$conn = createConnection();

print_r(GadgetSEO::getGadgetInfo($conn));

?>

<html>
<head>
    <title><?php echo "" ?></title>
</head>
<body></body>
</html>

