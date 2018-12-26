<?php

session_start();

// do the filtering and all here
include_once (__DIR__) . "/../../../model/login/BccKey.inc";
$bccKey = new BccKey();

$_url = $_GET['_url'];


include_once (__DIR__) . "/../../../model/coolgadgets/CoolGadgets.inc";
include_once (__DIR__) . "/../../../model/coolgadgets/EntityType.inc";
include_once (__DIR__) . "/../../../model/dbutils/dbConnection.php";
include_once (__DIR__) . "/../../../model/userdetails/UserDetail.inc";
include_once (__DIR__) . "/../../../model/util/FileUploader.inc";
$conn = createConnection();

switch ($_url) {
    case "categories" :
        $coolGadget = new CoolGadgets($conn, EntityType::$GADGET);
        echo json_encode($coolGadget->getAllCategories());
        break;

    case "product/names" :
        $coolGadget = new CoolGadgets($conn, EntityType::$GADGET);
        echo json_encode($coolGadget->getAllProductNameAndId());
        break;

    case "product/info" :
        $coolGadget = new CoolGadgets($conn, EntityType::$GADGET);
        echo json_encode($coolGadget->getGadgetInfoWithBlogContentByName($_GET['productName']));
        break;
    case "gizmo/submit" :
        $coolGadget = new CoolGadgets($conn, EntityType::$GADGET);
        $request_body = file_get_contents('php://input') or die("Unauthorised access");
        $data = json_decode($request_body, true);
        $result = array();
        $result['response'] = $coolGadget->submitNewGadget($data);
        echo json_encode($result);
        break;

    case "gizmo/update" :
        $coolGadget = new CoolGadgets($conn, EntityType::$ANY);
        $request_body = file_get_contents('php://input') or die("Unauthorised access");
        $data = json_decode($request_body, true);
        $result = array();
        $result['response'] = $coolGadget->updateGadget($data);
        echo json_encode($result);
        break;

    case "stories/search" :
        $coolGadget = new CoolGadgets($conn, EntityType::$STORY);
        if(isset($_GET['productName'])) {

            echo json_encode($coolGadget->getSearchItemsByLimit($_GET['productName']));
        }
        break;

    case "availability/submit" :
        $coolGadget = new CoolGadgets($conn, EntityType::$GADGET);
        $request_body = file_get_contents('php://input') or die("Unauthorised access");
        $data = json_decode($request_body, true);
        $result = array();
        $result['response'] = $coolGadget->submitAvailability($data);
        echo json_encode($result);
        break;
    case "gizmo/images" :
        $coolGadget = new CoolGadgets($conn, EntityType::$GADGET);
        FileUploader::uploadImages("/product_img/gadgets/", $_FILES);
        $result = array();
        $result['response'] = true;
        echo json_encode($result);
        break;
    default :
        header($_SERVER["SERVER_PROTOCOL"] . "404 Not Found", true, 404);

}
