var CaptchaCallback = function(){
		// for signup button - response string "g-recaptcha-response"
        if(document.getElementById("google-captcha")!=null)
        	grecaptcha.render('google-captcha', {'sitekey' : '6LfSrwwTAAAAADmDUhgSNDgOwWlt_MukW0oC97jB'});

        // for Have A Query button - response string "g-recaptcha-response-1"
    	if(document.getElementById("google-captcha1")!=null)
        	grecaptcha.render('google-captcha1', {'sitekey' : '6LfSrwwTAAAAADmDUhgSNDgOwWlt_MukW0oC97jB'});

        // for Forgot Password button - response string "g-recaptcha-response-2"
    	if(document.getElementById("google-captcha2")!=null)
        	grecaptcha.render('google-captcha2', {'sitekey' : '6LfSrwwTAAAAADmDUhgSNDgOwWlt_MukW0oC97jB'});

        // for Submit Missing Order button - response string "g-recaptcha-response-3"
    	if(document.getElementById("google-captcha3")!=null)
        	grecaptcha.render('google-captcha3', {'sitekey' : '6LfSrwwTAAAAADmDUhgSNDgOwWlt_MukW0oC97jB'});
};