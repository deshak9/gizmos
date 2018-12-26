<?php

/**
 * Created by PhpStorm.
 * User: prabhato
 * Date: 1/24/2017
 * Time: 5:08 PM
 */
class MailConfig
{
    static $noOfEmailsPerCronJob = 10;

    static $noOfTop10EmailsPerCronJob = 10;
    static $noOfNewGadgetEmailsPerCronJob = 10;
    static $noOfNewStoriesPerCronJob = 10;

    /// User Interaction Rate (UIR)
    static $UIRForDaily = 3;
    static $UIRForEvery3Days = 6;
    static $UIRForEveryWeekly = 11;
    static $UIRForEveryMonthly = 50;
}