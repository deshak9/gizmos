<!DOCTYPE html>
<?php
//include_once (__DIR__) . '/temporaryUnavailable.php';

session_start();
ob_start();

include_once (__DIR__) . '/model/dbutils/dbConnection.php';
include_once (__DIR__) . '/config/DeploymentEnvironment.php';
$conn = createConnection();

include_once (__DIR__) . '/model/util/old.redirect.php';
include_once (__DIR__) . '/model/referral.php';
include_once (__DIR__) . '/model/login/validatecookie.inc';
include_once (__DIR__) . "/model/login/BccKey.inc";
include_once (__DIR__) . "/model/coolgadgets/CoolGadgetsDB.inc";
include_once (__DIR__) . "/model/coolgadgets/EntityType.inc";

$coolGadgets = new CoolGadgetsDB($conn, EntityType::$GADGET);
$bccKey = new BccKey();
$bccKey->setBccKey();

?>

<html class="no-js" lang="en-US" prefix="og: http://ogp.me/ns#">
<head>
    <meta charset="utf-8">
    <title>Gadgets | gizmos | Cool Gadgets | Cool Gadgets to buy</title>
    <meta charset="UTF-8">
    <meta itemprop="name" content="Cool gadgets"/>
    <meta itemprop="url" content="http://www.gadgetclues.com"/>
    <meta name="description"
          content="Gadget Clues is home to some of the coolest gadgets and their availability in online shopping stores.">
    <meta name="keywords" content="gadgets,gizmos,cool gadgets,cool gizmos,top gadgets,top gizmos,cool gadgets to buy">
    <meta name="author" content="Prabhat Ojha">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta property="og:url" content="http://www.gadgetclues.com/"/>
    <meta property="og:type" content="website"/>
    <meta property="og:title" content="Cool Gadgets | Cool Gizmos | Gadgets to buy"/>
    <meta property="og:description"
          content="Why not make your life simpler with some amazing gadgets available in the market"/>
    <meta property="og:image" content=""/>
    <meta property="og:site_name" content="Gadget Clues"/>
    <meta property="og:locale" content="en_US"/>

    <meta name="twitter:site" content="@gadget_clues">
    <meta name="twitter:title" content="Cool Gadgets | Cool Gizmos | Gadgets to buy">
    <meta name="twitter:description"
          content="Why not make your life simpler with some amazing gadgets available in market">
    <meta name="twitter:creator" content="@gadget_clues">
    <meta name="twitter:image" content="">
    <meta name="twitter:domain" content="gadgetclues.com">

    <link rel='dns-prefetch' href='//s.w.org'/>
    <link rel="stylesheet" type="text/css" href="/css/reset.css">
    <link rel="stylesheet" type="text/css" href="/css/scss/style.php/style.scss">

    <link href="http://maxcdn.bootstrapcdn.com/font-awesome/4.1.0/css/font-awesome.min.css" rel="stylesheet">
    <link
        href="https://fonts.googleapis.com/css?family=Harmattan|Open+Sans+Condensed:300|Oswald|PT+Sans|Roboto|Slabo+27px"
        rel="stylesheet">
    <link href='https://fonts.googleapis.com/css?family=Lato:400,300,700' rel='stylesheet' type='text/css'>
    <!--For dev only when no internet-->
    <!--<script src="/js/build/react.js"></script>
    <script src="/js/build/react-dom.js"></script>-->

    <!--this is to support promises in IE and Safari-->
    <script src="https://cdnjs.cloudflare.com/ajax/libs/bluebird/3.3.5/bluebird.min.js"></script>

    <!--gets country code-->
    <script type="text/javascript">
        var url = window.location.href;
        value = url.split("?")[0];
        window.history.pushState("object or string", "Gadget | gizmos | cool gadgets", value);
        var visitorCountry = "US";
        var allowedCountry = ['IN', 'US'];
        function jsonpCallback(data) {
            if (data.address.country_code != "XX") {
                visitorCountry = data.address.country_code;
            }
            if (allowedCountry.indexOf(visitorCountry) < 0) {
                visitorCountry = "US";
            }
        }
        var RW_BCC_KEY;
        var UID;
        var isUserLoggedIn = false;
        var userName;
        var submitButtonBackground = "#ff5858";
        var submitButtonHoverBackground = "#ff7979";
        var sideTrendingStoriesComponentView = false;
        var sideLatestReviewComponentView = false;
        var socialButtonsColor = false;
        var latestStoriesComponentView = false;
        var pageFooterView = false;
    </script>
    <script src="http://api.wipmania.com/jsonp?callback=jsonpCallback"
            type="text/javascript"></script>
    <!--gets country code-->
</head>

<body style="position:relative;background:#f5f5f5;font-family: Lato,sans-serif;">
<?php
include_once (__DIR__) . "/mobile.or.desktop.php";
include_once (__DIR__) . "/views/header.php";
?>


<App id="app">
    <div style="position: fixed;left: 50%;top: 50%;text-align: center;">
        <div style="margin-top:-55px;margin-left:-40px;text-align: center;">
            <img width="60" height="60" src="/images/spin-black.gif">
            <br/>
            <label>Loading...</label>
        </div>
    </div>
</App>


<!--For prod only-->
<script src="https://unpkg.com/react@15/dist/react.min.js"></script>
<script src="https://unpkg.com/react-dom@15/dist/react-dom.min.js"></script>
<!-- Search -->
<script src="/public/vendor.bundle.js" type="text/javascript"></script>
<script src="/public/bundle.js" type="text/javascript"></script>


<?php
if(isProd()) {
    include_once("./tp/google-analytics.php");
}
include_once (__DIR__) . "/tp/facebook-flugins.php";
include_once (__DIR__) . "/tp/twitter-plugins.php";
include_once (__DIR__) . "/tp/google-flugin.php";
?>
</body>
</html>