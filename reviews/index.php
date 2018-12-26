<!DOCTYPE html>
<?php
//include_once (__DIR__) . '/temporaryUnavailable.php';

session_start();
ob_start();

include_once (__DIR__) . '/../model/dbutils/dbConnection.php';
include_once (__DIR__) . '/../config/DeploymentEnvironment.php';
$conn = createConnection();

include_once (__DIR__) . '/../model/util/old.redirect.php';
include_once (__DIR__) . '/../model/referral.php';
include_once (__DIR__) . '/../model/login/validatecookie.inc';
include_once (__DIR__) . "/../model/login/BccKey.inc";
include_once (__DIR__) . "/../model/seo/GadgetSEO.php";
include_once (__DIR__) . "/../model/seo/GenericMetaData.inc";

$gadgetInfo = GadgetSEO::getGadgetInfo($conn);

$productId = isset($gadgetInfo[CoolGadgetsTable::$PRODUCT_ID]) ? $gadgetInfo[CoolGadgetsTable::$PRODUCT_ID] : "";

if($productId == "") {
    header("location: /");
}

$pageTitle = isset($gadgetInfo[CoolGadgetsTable::$NAME]) ? $gadgetInfo[CoolGadgetsTable::$NAME] : "";
$pageTitle = GenericMetaData::setReviewsTitle($pageTitle);
$pageDescription = isset($gadgetInfo[CoolGadgetsTable::$DESCRIPTION]) ? $gadgetInfo[CoolGadgetsTable::$DESCRIPTION] : "";
$pageDescription = GenericMetaData::setDescription($pageDescription);
$pageImage = isset($gadgetInfo[CoolGadgetsTable::$IMAGE_URL]) ? $gadgetInfo[CoolGadgetsTable::$IMAGE_URL] : "";

$productName = $gadgetInfo[CoolGadgetsTable::$NAME];
$productNameEncoded = str_replace(" ", "-", trim($productName));

$productUrl = "/" . strtolower($gadgetInfo[CoolGadgetsTable::$TYPE]) . "/" . $productNameEncoded;


$bccKey = new BccKey();
$bccKey->setBccKey();

$pageKeyWords = "gadgets,cool gadgets,gadget review,tech,technology,technology news,tech news,top gadgets,top gizmos,cool gadgets to buy"
?>

<html class="no-js" lang="en-US" prefix="og: http://ogp.me/ns#">

<?php
include_once (__DIR__) . "/../views/common.head.section.php";
?>

<body style="position:relative;background:#f5f5f5;font-family: Lato,sans-serif;">
<?php
include_once (__DIR__) . "/../mobile.or.desktop.php";
include_once (__DIR__) . "/../views/header.php";
?>

<div class="full-width">
    <div class="page-width">
        <div class="left-data-container">
            <?php include_once (__DIR__) . "/../views/blog.data.php"; ?>
            <br/>
            <br/>
            <App id="app">
            </App>
        </div>
        <div class="right-data-container">
            <SideTrendingStoriesComponent
                id="side-trending-stories-component"
                name="Trending stories"></SideTrendingStoriesComponent>
            <SideLatestReviewComponent
                id="side-latest-review-component"></SideLatestReviewComponent>
            <br/>
            <br/>
            <div class="fb-page" data-href="https://www.facebook.com/TheGadgetclues" data-tabs="timeline"
                 data-small-header="true" data-adapt-container-width="true" data-hide-cover="false"
                 data-show-facepile="true">
                <blockquote cite="https://www.facebook.com/thegadgetclues" class="fb-xfbml-parse-ignore"><a
                        href="https://www.facebook.com/thegadgetclues">Gadgetclues</a></blockquote>
            </div>
        </div>
    </div>
</div>
<div class="clear-both-side"></div>
<AppFooter id="app-footer"></AppFooter>


<script src="/public/vendor.bundle.js" type="text/javascript"></script>
<script src="/public/bundle.js" type="text/javascript"></script>

<?php

include_once (__DIR__) . "/../tp/facebook-flugins.php";
include_once (__DIR__) . "/../tp/twitter-plugins.php";
include_once (__DIR__) . "/../tp/google-flugin.php";

if(isProd()) {
    include_once("./../tp/google-analytics.php");
}
?>
</body>
</html>