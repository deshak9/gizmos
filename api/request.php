<?php

session_start();

// do the filtering and all here
include_once (__DIR__) . "/../model/login/BccKey.inc";
$bccKey = new BccKey();

if(!isset($_GET['_url'])) {
    die();
}
$_url = $_GET['_url'];


include_once (__DIR__) . "/../model/coolgadgets/CoolGadgets.inc";
include_once (__DIR__) . "/../model/dbutils/dbConnection.php";
include_once (__DIR__) . "/../model/userdetails/UserDetail.inc";
include_once (__DIR__) . "/../model/login/FacebookLogin.inc";
include_once (__DIR__) . "/../model/coolgadgets/Promotion.inc";
include_once (__DIR__) . "/../model/coolgadgets/EntityType.inc";

$conn = createConnection();

$isSingleGadget = "gadget/";
if(strpos($_url, $isSingleGadget) !== false) {
    $bccKey->validateBccKey();
    $productName = explode('/', $_url)[1];
    $UID = $_GET['_u'];
    $country = $_GET['_c'];
    $coolGadget = new CoolGadgets($conn, EntityType::$GADGET);
    $productName = str_replace('-', ' ', $productName);
    echo json_encode($coolGadget->getGadgetInfo($productName, $UID, $country));
} else {

    switch ($_url) {
        case "latest-gadgets" :
            $bccKey->validateBccKey();
            $coolGadget = new CoolGadgets($conn, EntityType::$GADGET);
            if(isset($_GET['offset']) && isset($_GET['limit'])) {
                echo json_encode($coolGadget->getGadgetByLimit($_GET['offset'], $_GET['limit']));
            }
            break;
        case "gadgets/top10" :
            $bccKey->validateBccKey();
            $coolGadget = new CoolGadgets($conn, EntityType::$GADGET);
            $UID = $_GET['_u'];
            $country = $_GET['_c'];
            echo json_encode($coolGadget->getTop10Product($UID, $country));
            break;
        case "gadgets/category" :
            $bccKey->validateBccKey();
            $coolGadget = new CoolGadgets($conn, EntityType::$GADGET);

            if(isset($_GET['categoryId']) && isset($_GET['offset']) && isset($_GET['limit'])) {
                echo json_encode($coolGadget->getGadgetsByCategory($_GET['categoryId'], $_GET['offset'], $_GET['limit']));
            }
            break;

        case "gadgets/gadgets-by-view" :
            $bccKey->validateBccKey();
            $coolGadget = new CoolGadgets($conn, EntityType::$GADGET);
            $limit = $_GET['limit'];
            echo json_encode($coolGadget->getTopGadgetsWithLimitByView($limit));
            break;
        case "stories/stories-by-view" :
            //$bccKey->validateBccKey();
            $coolGadget = new CoolGadgets($conn, EntityType::$STORY);
            if(isset($_GET['limit'])) {
                $limit = $_GET['limit'];
                echo json_encode($coolGadget->getTrendingStoriesByView($limit));
            }
            break;
        case "stories/stories-by-range" :
            $bccKey->validateBccKey();
            $coolGadget = new CoolGadgets($conn, EntityType::$STORY);
            if(isset($_GET['offset']) && isset($_GET['limit'])) {

                echo json_encode($coolGadget->getLatestStoriesByRange($_GET['offset'], $_GET['limit']));
            }
            break;
        case "stories/search" :
            //$bccKey->validateBccKey();
            $coolGadget = new CoolGadgets($conn, EntityType::$STORY);
            if(isset($_GET['productName'])) {

                echo json_encode($coolGadget->getSearchItemsByLimit($_GET['productName']));
            }
            break;
        case "review/gadget-review" :
            //$bccKey->validateBccKey();
            $coolGadget = new CoolGadgets($conn, EntityType::$REVIEW);
            if(isset($_GET['limit'])) {
                $limit = $_GET['limit'];
                echo json_encode($coolGadget->getLatestReview($limit));
            }
            break;
        case "categories" :
            $bccKey->validateBccKey();
            $coolGadget = new CoolGadgets($conn, EntityType::$GADGET);
            echo json_encode($coolGadget->getAllCategories());
            break;
        case "user" :
            $result = new UserDetail($conn);
            echo $result->getLoggedInUserDetails();
            break;
        case "like-product" :
            $bccKey->validateBccKey();
            $coolGadget = new CoolGadgets($conn, EntityType::$GADGET);
            $request_body = file_get_contents('php://input') or die("Unauthorised access");
            $data = json_decode($request_body);

            $UID = $_GET['_u'];
            $productId = $data->productId;
            $coolGadget->likeAProduct($UID, $productId);
            break;
        case "user/create" :
            $bccKey->validateBccKey();
            $userDetail = new UserDetail($conn);
            $request_body = file_get_contents('php://input') or die("Unauthorised access");
            $result = array();
            $result['response'] = $userDetail->registrationWithJsonInput($request_body);
            echo json_encode($result);
            break;
        case "login" :
            $bccKey->validateBccKey();
            $userDetail = new UserDetail($conn);
            $request_body = file_get_contents('php://input') or die("Unauthorised access");
            $result = array();
            $result['response'] = $userDetail->onUserLoginWithJsonInput($request_body);
            echo json_encode($result);
            break;
        case "login/facebook" :
            $bccKey->validateBccKey();
            $fbLogin = new FacebookLogin($conn);
            $request_body = file_get_contents('php://input') or die("Unauthorised access");
            $result = array();
            $result['response'] = $fbLogin->loginWithFacebook($request_body);
            echo json_encode($result);
            break;
        case "user/submit/email" :
            $bccKey->validateBccKey();
            $promotion = new Promotion($conn);
            $request_body = file_get_contents('php://input') or die("Unauthorised access");
            $result = array();
            $result['response'] = $promotion->submitNewPromotionEntry($request_body);
            echo json_encode($result);
            break;
        case "logout" :
            $bccKey->validateBccKey();
            $userDetail = new UserDetail($conn);
            $userDetail->onUserLogout();
            $result = array();
            $result['response'] = true;
            echo json_encode($result);
            break;
        case "user/reset" :
            $bccKey->validateBccKey();
            $request_body = file_get_contents('php://input') or die("Unauthorised access");
            $userDetail = new UserDetail($conn);
            $result = array();
            $result['response'] = $userDetail->onResetPassword($request_body);
            echo json_encode($result);
            break;
        case "user/reset/validation" :
            $bccKey->validateBccKey();
            $request_body = file_get_contents('php://input') or die("Unauthorised access");
            $userDetail = new UserDetail($conn);
            $result = array();
            $result['response'] = $userDetail->onResetPasswordValidation($request_body);
            echo json_encode($result);
            break;
        case "unsubscribe" :
            $result = array();
            $result['response'] = false;
            if(!isset($_POST['e'])) {
                echo json_encode($result);
                break;
            }
            $request_body = $_POST['e'];
            $promotion = new Promotion($conn);
            $result = array();
            $result['response'] = $promotion->unsubscribeUserFromPromotion($request_body);
            echo json_encode($result);
            break;
        default :
            header($_SERVER["SERVER_PROTOCOL"] . "404 Not Found", true, 404);
    }
}
