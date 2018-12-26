<?php

//http://www.gadgetclues.com?_r=email&_e=replaceEmailIdHere
/**
 * Created by PhpStorm.
 * User: prabhato
 * Date: 2/19/2017
 * Time: 12:26 PM
 */

if(isset($_GET['_e'])) {
    $emailId = trim(base64_decode(base64_decode($_GET['_e'])));
} else {
    echo "Broken link";
    die();
}

if(filter_var($emailId, FILTER_VALIDATE_EMAIL) !== false) {
    $emailId = $_GET['_e'];
} else {
    echo "Broken link";
    die();
}

?>
<html class="no-js" lang="en-US" prefix="og: http://ogp.me/ns#">
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <script>
        var unsubscribed = false;
        function unsubscribe(e) {
            if (!unsubscribed) {
                var fd = new FormData();
                fd.append("e", e);
                var xhr = new XMLHttpRequest();
                xhr.open("POST", "/api/unsubscribe", true);
                xhr.send(fd);
                unsubscribed = true;
            }
            var ele = document.getElementById('unsubscribe-button').innerHTML = "Thank you, you are successfully unsubcribed."
        }
    </script>
</head>
<body>
<div style="width: 100%;margin-top: 50px;text-align: center">
    <p id="unsubscribe-button" style="font-size: 20px;color: #8a8a8a;">We surely gonna miss you :(</p>
    <a onclick="unsubscribe('<?php echo $emailId ?>')"
       style="padding: 5px 20px;cursor: pointer;background: #00ccff;color: #fff;border-radius: 3px;box-shadow: 0 0 2px #333;">
        Unsubscribe</a>
    <br>
    <a href="http://www.gadgetclues.com" style="display:block;cursor:pointer;text-decoration:underline;margin-top: 20px;color:#006666;">Changed your mind?</a>
</div>
</body>
</html>

