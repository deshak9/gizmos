<?php 


/**
* 
*/
class ValidateUserData
{

	/*function __construct(argument)
	{
		# code...
	}*/
	function validateDate($value='')
	{
		$value=trim($value);
		$pieces=explode('/', $value);
		if(count($pieces)==3 && ctype_digit($pieces[0]) && ctype_digit($pieces[1]) && ctype_digit($pieces[2]))
			if(checkdate($pieces[0],$pieces[1],$pieces[2]))
				return true;
		
		return false;
	}
	function validateOrderId($value='')
	{
		$value=trim($value);
		if(!preg_match('/\s/', $value) && strlen($value)<25)
			return true;

		return false;
	}

	function validateStoreName($value='')
	{
		$value=trim($value);
		if(!preg_match('/\s/', $value) && strlen($value)<25 && ctype_alnum($value))
			return true;

		return false;	
	}

	function validateAmount($value='')
	{
		$value=trim($value);
		if(ctype_digit($value) && strlen($value)<8)
			return true;

		return false;		
	}

	
}


?>