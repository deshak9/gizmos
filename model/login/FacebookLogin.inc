<?php

/**
 * Created by PhpStorm.
 * User: prabhato
 * Date: 1/10/2017
 * Time: 11:56 PM
 */

require_once (__DIR__) . "/../tp/php-graph-sdk-5.0.0/src/Facebook/autoload.php";
require_once (__DIR__) . "/../../config/facebooKey.php";
require_once (__DIR__) . "/../userdetails/UserDetail.inc";
require_once (__DIR__) . "/../util/UIDGenerator.php";

class FacebookLogin
{
    var $conn;

    function __construct($conn)
    {
        $this->conn = $conn;
    }

    function loginWithFacebook($request_body)
    {
        $data = json_decode($request_body);
        $fbUserId = trim($data->fbUserId);
        $fbAccessToken = trim($data->fbAccessToken);
        $fbUser = $this->getFacebookUserDetailByAccessCode($fbAccessToken);
        if($fbUserId == $fbUser['id']) {
            $userDetails = new UserDetail($this->conn);
            $userName = trim($fbUser['name']);
            if(isset($fbUser['email'])) {
                $emailId = trim(strtolower($fbUser['email']));
            } else {
                $emailId = UIDGenerator::getDummyEmailId($fbUserId);
            }
            $password = trim($fbUser['id'] . getFacebookNewRegistrationKey());

            if($userDetails->newUserRegistration($userName, $emailId, $password)) {
                return true;
            } else {
                return $userDetails->onUserLogin($emailId, $password);
            }
        }
        return false;
    }

    function getFacebookUserDetailByAccessCode($accessToken)
    {
        $fb = new Facebook\Facebook([
            'app_id' => getFacebookAppId(),
            'app_secret' => getFacebookAppSecret(),
            'default_graph_version' => 'v2.2',
        ]);

        try {
            // Returns a `Facebook\FacebookResponse` object
            $response = $fb->get('/me?fields=id,name,email', $accessToken);
        } catch (Facebook\Exceptions\FacebookResponseException $e) {
            echo 'Graph returned an error: ' . $e->getMessage();
            exit;
        } catch (Facebook\Exceptions\FacebookSDKException $e) {
            echo 'Facebook SDK returned an error: ' . $e->getMessage();
            exit;
        }

        $user = $response->getGraphUser();
        return $user;
    }
}