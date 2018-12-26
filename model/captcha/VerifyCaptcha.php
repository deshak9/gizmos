<?php  
function verifyCaptchaResult($captchaResult)
{

	$url="https://www.google.com/recaptcha/api/siteverify?secret=6LfSrwwTAAAAAMjiVa-9c93anQ-jJVsZ_io-qfUG&response=".$captchaResult."&remoteip=".$_SERVER['REMOTE_ADDR'];	
	
	$options=array(
		'https' => array(
			'header' => "Content-type: application/json",
			'method' => "GET",
			),
		);

	$contex = stream_context_create($options);

	$result = file_get_contents($url,false,$contex);

	//print_r($result);
	//echo $result->;
	$decodedResult=json_decode($result);
	return $decodedResult->success;

}

function googleCaptcha()
{
	if(!isset($_POST["captchaResult"]))
		die();
	$captchaResult=$_POST["captchaResult"];
	$result=verifyCaptchaResult($captchaResult);
	return $result;
}

?>