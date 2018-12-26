<?php

class OrderDetailsDB
{
    var $sqlUtils;
    var $conn;
    function __construct($conn)
    {
        $this->sqlUtils = new SqlUtils();
        $this->conn = $conn;
    }

    function insertData($emailId, $mobileNumber, $UID, $orderId, $discountAmount, $mailSentFlag)
    {
        date_default_timezone_set("Asia/Kolkata");
        $today = date('d/m/Y', time());

        $submitReq = false;
        $query = $this->sqlUtils->ORDER_INSERT_QUERY . "(OrderId, EmailId, UID, MobileNumber, MailSentFlag, Time, Date, EarnedDiscount) VALUES (?,?,?,?,?,?,?,?)";
        $submitReq = mysqli_prepare($this->conn, $query) or die(mysqli_error($this->conn));
        mysqli_stmt_bind_param($submitReq, "sssdsssd", $orderId, $emailId, $UID, $mobileNumber, $mailSentFlag, $today, $today, $discountAmount);
        mysqli_stmt_execute($submitReq) or die(mysqli_error($this->conn));
        $submitReq = false;

    }
}