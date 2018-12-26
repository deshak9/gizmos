<?php  
$isloggedin=false;
$username="";
$email="";
$acquiredcashback=0;
$paidcashback=0;
$totalcashback=0;
$referralcashback=0;
$UID="";

if(isset($_SESSION['RW-UID']) && $_SESSION['RW-UID']!="")
{
  $isloggedin=true;
  $UID=$_SESSION['RW-UID'];
}
else
  $isloggedin=false;


if(isset($_SESSION['RW-username']) && $_SESSION['RW-username']!="")
  $username=$_SESSION['RW-username'];
else
  $username="";

if(isset($_SESSION['RW-acquiredcashback']) && $_SESSION['RW-acquiredcashback']!="")
  $acquiredcashback=$_SESSION['RW-acquiredcashback'];
else
  $acquiredcashback="0";

if(isset($_SESSION['RW-paidcashback']) && $_SESSION['RW-paidcashback']!="")
  $paidcashback=$_SESSION['RW-paidcashback'];
else
  $paidcashback="0";

if(isset($_SESSION['RW-totalcashback']) && $_SESSION['RW-totalcashback']!="")
  $totalcashback=$_SESSION['RW-totalcashback'];
else
  $totalcashback="0";

if(isset($_SESSION['RW-referralcashback']) && $_SESSION['RW-referralcashback']!="")
  $referralcashback=$_SESSION['RW-referralcashback'];
else
  $referralcashbacks="0";

?>
