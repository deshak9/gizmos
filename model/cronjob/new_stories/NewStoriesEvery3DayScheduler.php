<?php
/**
 * Created by PhpStorm.
 * User: prabhato
 * Date: 2/22/2017
 * Time: 10:38 AM
 */

include_once (__DIR__) . "/../../cronjob/new_gadget/NewGadgetsScheduler.php";
include_once (__DIR__) . "/../../../config/mail.config.php";

scheduleNewStoriesMail(MailConfig::$UIRForEvery3Days);