<?php
/**
 * Created by PhpStorm.
 * User: prabhato
 * Date: 3/18/2017
 * Time: 2:09 PM
 */

?>

<head>
    <meta charset="utf-8"/>
    <title><?php echo $pageTitle; ?></title>
    <meta charset="UTF-8"/>
    <meta name="description"
          content="<?php echo $pageDescription ?>"/>
    <meta name="keywords"
          content="<?php echo $pageKeyWords ?>"/>
    <meta name="author" content="Prabhat Ojha"/>
    <meta property="og:url" content="http://www.gadgetclues.com/"/>
    <meta property="og:type" content="website"/>
    <meta property="og:title" content="<?php echo $pageTitle; ?>"/>
    <meta property="og:description"
          content="<?php echo $pageDescription; ?>"/>
    <meta property="og:image" content="<?php echo $pageImage ?>"/>
    <meta property="og:site_name" content="Gadget Clues"/>
    <meta property="og:locale" content="en_US"/>

    <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
    <meta name="twitter:site" content="@gadget_clues"/>
    <meta name="twitter:title" content="<?php echo $pageTitle; ?>"/>
    <meta name="twitter:description"
          content="<?php echo $pageDescription; ?>"/>
    <meta name="twitter:creator" content="@gadget_clues"/>
    <meta name="twitter:image" content="<?php echo $pageImage ?>"/>
    <meta name="twitter:domain" content="http://www.gadgetclues.com"/>

    <link rel='dns-prefetch' href='//s.w.org'/>
    <link rel="stylesheet" type="text/css" href="/css/reset.css"/>
    <link rel="stylesheet" type="text/css"
          href="/css/scss/style.php/style.scss"/>
    <link
        href="http://maxcdn.bootstrapcdn.com/font-awesome/4.1.0/css/font-awesome.min.css"
        rel="stylesheet"/>

    <link
        href="https://fonts.googleapis.com/css?family=Harmattan|Open+Sans+Condensed:300|Oswald|PT+Sans|Roboto|Slabo+27px"
        rel="stylesheet"/>
    <link
        href='https://fonts.googleapis.com/css?family=Lato:400,300,700'
        rel='stylesheet' type='text/css'/>
    <!--For dev only when no internet-->
    <!--<script src="/js/build/react.js"></script>
    <script src="/js/build/react-dom.js"></script>-->

    <!--For prod only-->
    <script
        src="https://unpkg.com/react@15/dist/react.min.js"></script>
    <script
        src="https://unpkg.com/react-dom@15/dist/react-dom.min.js"></script>
    <!-- Search -->

    <script src="/js/common.js"></script>

    <!--this is to support promises in IE and Safari-->
    <script
        src="https://cdnjs.cloudflare.com/ajax/libs/bluebird/3.3.5/bluebird.min.js"></script>

    <!--gets country code-->
    <script type="text/javascript">
        var url = window.location.href;
        value = url.split("?")[0];
        /*window.history.pushState("object or string
         ", "Gadget | gizmos | cool gadgets
         ", value
         )
         ;*/
        var visitorCountry = "US";
        var allowedCountry = ['IN', 'US'
            ]
            ;
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
        var sideTrendingStoriesComponentView = true;
        var sideLatestReviewComponentView = true;
        var socialButtonsColor = true;
        var pageFooterView = true;

    </script>

    <script
        src="http://api.wipmania.com/jsonp?callback=jsonpCallback"
        type="text/javascript"></script>
    <script type="text/javascript">var pageProductUrl = "<?php echo $productUrl; ?>";</script>
    <script type="text/javascript">var pageProductName = "<?php echo $productName; ?>";</script>
    <script type="text/javascript">var pageProductImageUrl = "<?php echo $pageImage; ?>";</script>
    <script type="text/javascript">var pageProductDescription = "<?php echo $pageDescription; ?>";</script>
</head>
