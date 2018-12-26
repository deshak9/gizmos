<?php

class BccKey
{
    private $salt = "askjfjsaaskfsjakj235kj3hjkh23k5jh32k5lj32h5kj32h532lk5h2klj35h23jh5";

    function setBccKey()
    {
        $_SESSION['RW-BCC-KEY'] = sha1(session_id() . $_SERVER['REMOTE_ADDR'] . $this->salt);
    }

    function validateBccKey()
    {
        if (isset($_GET['_t']) && isset($_SESSION['RW-BCC-KEY'])) {
            $bccKey = $_GET['_t'];
            if ($_SESSION['RW-BCC-KEY'] == $bccKey) {
                return;
            }
        }
        header($_SERVER["SERVER_PROTOCOL"] . "404 Not Found", true, 404);
        die("404 Not Found");
    }

    function getBccKey()
    {
        return isset($_SESSION['RW-BCC-KEY']) ? $_SESSION['RW-BCC-KEY'] : "";
    }

}