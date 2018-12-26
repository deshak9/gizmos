<?php

include_once (__DIR__) . "/../userdetails/UserDetail.inc";

$userDetails = new UserDetail($conn);

$userDetails->validateCookie();

