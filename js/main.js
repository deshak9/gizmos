jQuery(document).ready(function ($) {

    var dom_model = $('.upper-header-container');
    var $form_modal = $('.cd-user-modal'),
        $have_a_query_button = $('#cd-have-a-query'),
        $form_have_a_query = $('#have-a-query'),
        $form_login = $form_modal.find('#cd-login'),
        $form_signup = $form_modal.find('#cd-signup'),
        $form_forgot_password = $form_modal.find('#cd-reset-password'),
        $submit_order_details_button = $('.cd-submit-order-button'),
        $form_submit_order_details = $form_modal.find('#cd-submit-order'),
        $form_forgotpassword = $('#cd-forgotpassword'),
        $form_modal_tab = $('.cd-switcher'),
        $form_close_form = $('.cd-close-form'),
        $tab_login = $form_modal_tab.children('li').eq(0).children('a'),
        $tab_signup = $form_modal_tab.children('li').eq(1).children('a'),
        $forgot_password_link = $form_login.find('.cd-form-bottom-message a'),
        $back_to_login_link = $form_forgot_password.find('.cd-form-bottom-message a'),
        $main_nav = $('.top-items'),
        $loginsignupbutton = $('#menu-item-4943'),
        $closebannerbutton = $('#closebutton'),
        $loginsignupcontent = $('#loginsignup'),
        $global_nav = $('.cd-signin');

  /*  NodeList.prototype.remove = HTMLCollection.prototype.remove = function() {
        for(var i = this.length - 1; i >= 0; i--) {
            if(this[i] && this[i].parentElement) {
                this[i].parentElement.removeChild(this[i]);
            }
        }
    }
    if ($('.search-box-visible').style(display) == 'none') {
        document.getElementsByClassName("search-box-visible").remove();
    }*/
    //open modal
    $global_nav.on('click', function (event) {
        event.preventDefault();
        $form_modal.addClass('is-visible');
        login_selected();
    });
    $have_a_query_button.on('click', function (event) {
        event.preventDefault();
        $form_modal.addClass('is-visible');
        have_a_query();
    });

    $submit_order_details_button.on('click', function (event) {
        event.preventDefault();
        $form_modal.addClass('is-visible');
        submit_order_details();
    });
    //

    $(".cd-forgot-password").click(function () {

        $form_modal.addClass('is-visible');
        $form_have_a_query.hide();
        $form_forgotpassword.show();
        $form_submit_order_details.hide();

        $form_close_form.show();
        $form_modal_tab.hide();
        $tab_login.hide();
        $tab_signup.hide();

    });

    //open modal
    $main_nav.on('click', function (event) {


        if ($(event.target).is($main_nav)) {
            // on mobile open the submenu
            $(this).children('ul').toggleClass('is-visible');
        } else {
            // on mobile close submenu
            $main_nav.children('ul').removeClass('is-visible');
            //show modal layer


            //show the selected form
            if ($(event.target).is('.cd-forgot-password')) {
                $form_modal.addClass('is-visible');
                forgot_password();
            }
            else if ($(event.target).is('.cd-have-a-query')) {
                $form_modal.addClass('is-visible');
                have_a_query();
            }
            else if ($(event.target).is('.cd-submit-order')) {
                $form_modal.addClass('is-visible');
                submit_order_details();
            }

        }

    });

    // Slide down login and sign up form //

    /*$loginsignupbutton.on('click', function(event){

     $("#passwordresetform").css("display","none");
     $("#loginsignup").slideToggle("slow");
     $("#loginsignup").css("display", "block");
     });*/

    // close banner button, close button for banner
    $closebannerbutton.on('click', function (event) {
        $("#banner1").css("display", "none");
        $("#closebutton").css("display", "none");
    });

    function forgot_password() {

        $form_have_a_query.hide();
        $form_forgotpassword.show();
        $form_submit_order_details.hide();

        $form_modal_tab.hide();
        $tab_login.hide();
        $tab_signup.hide();
    }

    function how_it_works() {

        $form_have_a_query.hide();
        $form_forgotpassword.hide();
        $form_submit_order_details.hide();

        $form_modal_tab.hide();
        $tab_login.hide();
        $tab_signup.hide();
        $form_login.hide();
        $form_signup.hide();
        $form_forgot_password.hide();

    }

    function submit_order_details() {

        $form_have_a_query.hide();
        $form_forgotpassword.hide();
        $form_submit_order_details.show();

        $form_modal_tab.hide();
        $tab_login.hide();
        $tab_signup.hide();
        $form_login.hide();
        $form_signup.hide();
        $form_forgot_password.hide();

    }

    function have_a_query() {

        $form_forgotpassword.hide();
        $form_submit_order_details.hide();
        $form_have_a_query.show();

        $form_modal_tab.hide();
        $tab_login.hide();
        $tab_signup.hide();
        $form_login.hide();
        $form_signup.hide();
        $form_forgot_password.hide();
    }

    //close modal
    $('.cd-user-modal').on('click', function (event) {
        if ($(event.target).is($form_modal) || $(event.target).is('.cd-close-form')) {
            $form_modal.removeClass('is-visible');
        }
    });
    //close modal when clicking the esc keyboard button
    $(document).keyup(function (event) {
        if (event.which == '27') {
            $form_modal.removeClass('is-visible');
        }
    });

    //switch from a tab to another
    $form_modal_tab.on('click', function (event) {
        event.preventDefault();
        ( $(event.target).is($tab_login) ) ? login_selected() : signup_selected();
    });

    //hide or show password
    $('.hide-password').on('click', function () {
        var $this = $(this),
            $password_field = $this.prev('input');

        ( 'password' == $password_field.attr('type') ) ? $password_field.attr('type', 'text') : $password_field.attr('type', 'password');
        ( 'Hide' == $this.text() ) ? $this.text('Show') : $this.text('Hide');
        //focus and move cursor to the end of input field
        $password_field.putCursorAtEnd();
    });

    //show forgot-password form
    $forgot_password_link.on('click', function (event) {
        event.preventDefault();
        forgot_password_selected();
    });

    //back to login from the forgot-password form
    $back_to_login_link.on('click', function (event) {
        event.preventDefault();
        login_selected();
    });

    function login_selected() {
        $form_login.addClass('is-selected');
        $form_signup.removeClass('is-selected');
        $form_forgot_password.removeClass('is-selected');
        $tab_login.addClass('selected');
        $tab_signup.removeClass('selected');

        $form_modal_tab.show();
        $tab_login.show();
        $tab_signup.show();
        $form_login.show();
        $form_signup.hide();

        $form_have_a_query.hide();
        $form_forgotpassword.hide();
        $form_submit_order_details.hide();

        $form_forgot_password.hide();

    }

    function signup_selected() {
        $form_login.removeClass('is-selected');
        $form_signup.addClass('is-selected');
        $form_forgot_password.removeClass('is-selected');
        $tab_login.removeClass('selected');
        $tab_signup.addClass('selected');

        $form_modal_tab.show();
        $tab_login.show();
        $tab_signup.show();
        $form_login.hide();
        $form_signup.show();

        $form_have_a_query.hide();
        $form_forgotpassword.hide();
        $form_submit_order_details.hide();

        $form_forgot_password.hide();


    }

    function forgot_password_selected() {
        $form_login.removeClass('is-selected');
        $form_signup.removeClass('is-selected');
        $form_forgot_password.addClass('is-selected');
        $form_forgot_password.show();

        $form_modal_tab.show();
        $tab_login.show();
        $tab_signup.show();
        $form_login.hide();
        $form_signup.hide();

        $form_have_a_query.hide();
        $form_forgotpassword.hide();
        $form_submit_order_details.hide();


    }

    //REMOVE THIS - it's just to show error messages
    $form_login.find('input[type="submit"]').on('click', function (event) {
        event.preventDefault();
        $form_login.find('input[type="email"]').toggleClass('has-error').next('span').toggleClass('is-visible');
    });
    $form_signup.find('input[type="submit"]').on('click', function (event) {
        event.preventDefault();
        $form_signup.find('input[type="email"]').toggleClass('has-error').next('span').toggleClass('is-visible');
    });


    //IE9 placeholder fallback
    //credits http://www.hagenburger.net/BLOG/HTML5-Input-Placeholder-Fix-With-jQuery.html
    if (!Modernizr.input.placeholder) {
        $('[placeholder]').focus(function () {
            var input = $(this);
            if (input.val() == input.attr('placeholder')) {
                input.val('');
            }
        }).blur(function () {
            var input = $(this);
            if (input.val() == '' || input.val() == input.attr('placeholder')) {
                input.val(input.attr('placeholder'));
            }
        }).blur();
        $('[placeholder]').parents('form').submit(function () {
            $(this).find('[placeholder]').each(function () {
                var input = $(this);
                if (input.val() == input.attr('placeholder')) {
                    input.val('');
                }
            })
        });
    }


// Focus on button when user hit enter after filling up the Email and password for login or sign up//
    $('#loginemail').keypress(function (event) {
        if (event.keyCode == 13) {
            $('#loginbutton').click();
        }
    });

    $('#loginpassword').keypress(function (event) {
        if (event.keyCode == 13) {
            $('#loginbutton').click();
        }
    });

    $('#signuprepassword').keypress(function (event) {
        if (event.keyCode == 13) {
            $('#signupbutton').click();
        }
    });

    /*$(function() {
     var availableTags = [
     "ActionScript",
     "AppleScript",
     "Asp",
     "BASIC",
     "C",
     "C++",
     "Clojure",
     "COBOL",
     "ColdFusion",
     "Erlang",
     "Fortran",
     "Groovy",
     "Haskell",
     "Java",
     "JavaScript",
     "Lisp",
     "Perl",
     "PHP",
     "Python",
     "Ruby",
     "Scala",
     "Scheme"
     ];
     $( "#search-store-box" ).autocomplete({
     source: availableTags
     });
     });*/

});


//credits http://css-tricks.com/snippets/jquery/move-cursor-to-end-of-textarea-or-input/
jQuery.fn.putCursorAtEnd = function () {
    return this.each(function () {
        // If this function exists...
        if (this.setSelectionRange) {
            // ... then use it (Doesn't work in IE)
            // Double the length because Opera is inconsistent about whether a carriage return is one character or two. Sigh.
            var len = $(this).val().length * 2;
            this.setSelectionRange(len, len);
        } else {
            // ... otherwise replace the contents with itself
            // (Doesn't work in Google Chrome)
            $(this).val($(this).val());
        }
    });
};


function sendQuery() {

    var captchaResult = getGCaptchaResponse();
    if (captchaResult == "") {
        document.getElementById('ResultOfQuery').innerHTML = "Please answer the Captcha";
        return;
    }


    var flag = 1;

    var txtQ = document.getElementById('txtQuery').value;
    if (txtQ == "" || txtQ.length < 20) {
        flag = 0;
        document.getElementById('txtQuery').focus();
        return;
    }

    var email = document.getElementById('txtQueryEmail').value;
    var re = /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i;
    if (re.test(email) && email.length < 50) {
    }
    else {
        flag = 0;
        document.getElementById('txtQueryEmail').focus();
        return;
    }


    if (flag == 1) {
        document.getElementById("send-query-button").disabled = true;


        var fd = new FormData();
        fd.append("email", email);
        txtQ = email + "  " + txtQ;
        fd.append("txtQ", txtQ);
        fd.append("signInOrSignUp", "have_a_query");
        fd.append("token", "psafsafjhl32j4bbvasf23124ci4werkh12u3bdjf89535dgfdjhh");
        fd.append("captchaResult", captchaResult);

        var xmlhttp;
        if (window.XMLHttpRequest) {// code for IE7+, Firefox, Chrome, Opera, Safari
            xmlhttp = new XMLHttpRequest();
        }
        else {// code for IE6, IE5
            xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
        }
        xmlhttp.onreadystatechange = function () {
            if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
                /*document.getElementById('uploadfiles').value="Uploading...";*/
                if (xmlhttp.responseText.trim() == "yes") {
                    document.getElementById('ResultOfQuery').innerHTML = "Your query is submitted. We will reply to your email id shortly";
                    document.getElementById('txtQuery').value = "";
                    document.getElementById('txtQueryEmail').value = "";
                }
                else if (xmlhttp.responseText.trim() == "bot") {
                    document.getElementById('ResultOfQuery').innerHTML = "Plese refresh the page";
                    document.getElementById('txtQuery').value = "";
                    document.getElementById('txtQueryEmail').value = "";
                }
                else {
                    document.getElementById('ResultOfQuery').innerHTML = "Unable to submit your request, please try later";
                }

                document.getElementById("send-query-button").disabled = false;


            }
        }

        xmlhttp.open("POST", "/login/login.php", true);
        xmlhttp.send(fd);
    }
}

function login() {

    var flag = 1;
    var email = document.getElementById('loginemail').value;
    var re = /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i;
    if (re.test(email) && email.length < 50) {
    }
    else {
        flag = 0;
        document.getElementById('loginemail').focus();
        document.getElementById('loginemail').placeholder = "Please enter valid email address";
        return;
    }

    var pass = document.getElementById('loginpassword').value;
    if (pass == "") {
        flag = 0;
        document.getElementById('loginpassword').focus();
        document.getElementById('loginpassword').placeholder = "Please enter the password";
        return;
    }

    var keepLoggedInUser = document.getElementById("keepmeloggedin").checked;

    if (flag == 1) {
        document.getElementById("loginstatus").innerHTML = "Logging in ...";
        document.getElementById("loginbutton").disabled = true;
        var fd = new FormData();
        fd.append("signInOrSignUp", "signin");
        fd.append("email", email);
        fd.append("password", pass);
        fd.append("token", "psafsafjhl32j4bbvasf23124ci4werkh12u3bdjf89535dgfdjhh");
        fd.append("keepmeloggedin", keepLoggedInUser);
        var xmlhttp;
        if (window.XMLHttpRequest) {// code for IE7+, Firefox, Chrome, Opera, Safari
            xmlhttp = new XMLHttpRequest();
        }
        else {// code for IE6, IE5
            xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
        }
        xmlhttp.onreadystatechange = function () {
            if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
                /*document.getElementById('uploadfiles').value="Uploading...";*/

                if (xmlhttp.responseText.trim() == "yes") {
                    location.reload();
                }
                else {
                    document.getElementById("loginstatus").innerHTML = "Invalid email address or password";
                    document.getElementById("loginbutton").disabled = false;
                }

            }
        }

        xmlhttp.open("POST", "/login/login.php", true);
        xmlhttp.send(fd);
    }
}

function logout() {
    var myCookie = document.cookie.replace(/(?:(?:^|.*;\s*)RWcookie\s*\=\s*([^;]*).*$)|^.*$/, "$1");
    console.log("hello" + myCookie);

    document.cookie = 'RWcookie=; expires=Thu, 01 Jan 1970 00:00:01;path=/;false;';
    //document.cookie = 'RWcookie=; expires=Thu, 01 Jan 1970 00:00:01;path=/;domain=www.refillwallet.com;';
    window.location = '/';

    var myCookie = document.cookie.replace(/(?:(?:^|.*;\s*)RWcookie\s*\=\s*([^;]*).*$)|^.*$/, "$1");
    console.log("hello" + myCookie);
}

function submitResetPassword(resetlink) {

    if (resetlink == '') {
        document.getElementById('resetstatus').innerHTML = "Please click on link sent to your mail id";
        return;
    }
    var flag = 1;
    var pass = document.getElementById('resetpassword').value;
    if (pass == "") {
        flag = 0;
        document.getElementById('resetpassword').focus();
        return;
    }
    if (pass.length < 6) {
        flag = 0;
        document.getElementById('resetpassword').focus();
        document.getElementById('resetrepassword').value = "";
        document.getElementById('resetstatus').innerHTML = "Password must be at least 6 characters";
        return;
    }
    var repass = document.getElementById('resetrepassword').value;
    if (repass == "" || pass != repass) {
        flag = 0;
        document.getElementById('resetrepassword').focus();
        document.getElementById('resetstatus').innerHTML = "Password doesn't match";
        return;
    }
    if (flag == 1) {
        document.getElementById("password-reset-button").disabled = true;
        var fd = new FormData();
        fd.append("signInOrSignUp", "resetpassword");
        fd.append("resetlink", resetlink);
        fd.append("password", pass);
        fd.append("token", "psafsafjhl32j4bbvasf23124ci4werkh12u3bdjf89535dgfdjhh");
        var xmlhttp;
        if (window.XMLHttpRequest) {// code for IE7+, Firefox, Chrome, Opera, Safari
            xmlhttp = new XMLHttpRequest();
        }
        else {// code for IE6, IE5
            xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
        }
        xmlhttp.onreadystatechange = function () {
            if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
                /*document.getElementById('uploadfiles').value="Uploading...";*/
                if (xmlhttp.responseText.trim() == "yes") {
                    document.getElementById('resetstatus').innerHTML = 'Your password is updated successfully, login now';
                }
                else {
                    if (xmlhttp.responseText.trim() == "expired link")
                        document.getElementById('resetstatus').innerHTML = "Link is expired, try forgot password again";
                    else if (xmlhttp.responseText.trim() == "invalid link")
                        document.getElementById('resetstatus').innerHTML = "Invalid link";
                    else
                        document.getElementById('resetstatus').innerHTML = "Somthing went wrong, try refreshing the page";
                }

                document.getElementById("password-reset-button").disabled = false;
            }
        }

        xmlhttp.open("POST", "/login/login.php", true);
        xmlhttp.send(fd);
    }
}

function forgotpassword() {

    var captchaResult = getGCaptchaResponse();
    if (captchaResult == "") {
        document.getElementById('ResultOfForgotPassword').innerHTML = "Please answer the Captcha";
        return;
    }

    var email = document.getElementById('forgotpasswordMail').value;
    var re = /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i;
    if (re.test(email) && email.length < 50) {
        document.getElementById("forgot-password-button").disabled = true;

        var fd = new FormData();
        fd.append("signInOrSignUp", "forgotpassword");
        fd.append("email", email);
        fd.append("token", "psafsafjhl32j4bbvasf23124ci4werkh12u3bdjf89535dgfdjhh");
        fd.append("captchaResult", captchaResult);
        var xmlhttp;
        if (window.XMLHttpRequest) {// code for IE7+, Firefox, Chrome, Opera, Safari
            xmlhttp = new XMLHttpRequest();
        }
        else {// code for IE6, IE5
            xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
        }
        xmlhttp.onreadystatechange = function () {
            if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
                /*document.getElementById('uploadfiles').value="Uploading...";*/
//                    alert(xmlhttp.responseText);
                if (xmlhttp.responseText.trim() == "yes") {
                    document.getElementById('forgotpasswordMail').value = "";
                    document.getElementById('ResultOfForgotPassword').innerHTML = "Email sent, please click on the password reset link";
                }
                else if (xmlhttp.responseText.trim() == "bot") {
                    document.getElementById('forgotpasswordMail').value = "";
                    document.getElementById('ResultOfForgotPassword').innerHTML = "Plese refresh the page";
                }
                else {
                    if (xmlhttp.responseText.trim() == "not registered")
                        document.getElementById('ResultOfForgotPassword').innerHTML = "Email id not registered, please create new account";
                    else
                        document.getElementById('ResultOfForgotPassword').innerHTML = "Could not send email, please try later";
                }

                document.getElementById("forgot-password-button").disabled = false;
            }
        }

        xmlhttp.open("POST", "/login/login.php", true);
        xmlhttp.send(fd);
    }
    else {
        document.getElementById('forgotpasswordMail').focus();
        document.getElementById('forgotpasswordMail').placeholder = "Please enter valid email address";
        return;
    }


}

function signup() {

    flag = 1;
    var phoneNo = document.getElementById('signupphone').value;
    if (/^\d{10}$/.test(phoneNo) && phoneNo.length == 10) {

    }
    else {
        flag = 0;
        document.getElementById('signupphone').focus();
        document.getElementById('signupstatus').innerHTML = "Please enter correct mobile number";
        return;
    }

    var email = document.getElementById('signupemail').value;
    var re = /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i;
    if (re.test(email) && email.length < 50) {
    }
    else {
        flag = 0;
        document.getElementById('signupemail').focus();
        document.getElementById('signupstatus').innerHTML = "Please enter valid email address";
        return;
    }

    var pass = document.getElementById('signuppassword').value;
    if (pass == "") {
        flag = 0;
        document.getElementById('signuppassword').focus();
        document.getElementById('signupstatus').innerHTML = "Please enter the password";
        return;
    }
    if (pass.length < 6) {
        flag = 0;
        document.getElementById('signuppassword').focus();
        document.getElementById('signupstatus').innerHTML = "Password must be at least 6 characters";
        return;
    }
    var paymentmethod = document.getElementById('select-payment-method').value;
    if (paymentmethod == "0") {
        flag = 0;
        document.getElementById('select-payment-method').focus();
        document.getElementById('signupstatus').innerHTML = "Please select payment method";
        return;
    }

    var captchaResult = getGCaptchaResponse();
    if (captchaResult == "") {
        document.getElementById('signupstatus').innerHTML = "Please answer the Captcha";
        return;

    }

    if (flag == 1) {

        document.getElementById("signupbutton").disabled = true;
        document.getElementById("signupbutton").value = 'Creating...';

        var fd = new FormData();
        fd.append("signInOrSignUp", "signup");
        fd.append("username", "username");
        fd.append("email", email);
        fd.append("phoneNo", phoneNo);
        fd.append("password", pass);
        fd.append("paymentmethod", paymentmethod);
        fd.append("token", "psafsafjhl32j4bbvasf23124ci4werkh12u3bdjf89535dgfdjhh");
        fd.append("captchaResult", captchaResult);
        var xmlhttp;
        if (window.XMLHttpRequest) {// code for IE7+, Firefox, Chrome, Opera, Safari
            xmlhttp = new XMLHttpRequest();
        }
        else {// code for IE6, IE5
            xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
        }
        xmlhttp.onreadystatechange = function () {
            if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
                /*document.getElementById('uploadfiles').value="Uploading...";*/
                if (xmlhttp.responseText.trim() == "yes") {
                    location.reload();
                }
                else {
                    if (xmlhttp.responseText.trim() == "exist") {

                        document.getElementById('signupstatus').innerHTML = "Account already registered please try logging in";
                        document.getElementById("signupbutton").value = 'SignUp';
                        document.getElementById('loginemail').focus();
                        document.getElementById("signupbutton").disabled = false;

                    }
                    else if (xmlhttp.responseText.trim() == "bot") {
                        document.getElementById('signupstatus').innerHTML = "Plese refresh the page";
                        document.getElementById("signupbutton").value = 'SignUp';
                        document.getElementById("signupbutton").disabled = false;

                    }
                    document.getElementById("signupbutton").disabled = false;
                }

            }
        }

        xmlhttp.open("POST", "/login/login.php", true);
        xmlhttp.send(fd);
    }
}


function redirect(storename) {

    var fd = new FormData();
    fd.append("token", "dfgieiuhuhkhjskdfjshdkafjhiu3rh89f8f789safhuf8987");
    var xmlhttp;
    if (window.XMLHttpRequest) {// code for IE7+, Firefox, Chrome, Opera, Safari
        xmlhttp = new XMLHttpRequest();
    }
    else {// code for IE6, IE5
        xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
    }
    xmlhttp.onreadystatechange = function () {
        if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
            /*document.getElementById('ResultOfRequest').innerHTML=xmlhttp.responseText.trim();*/
            if (xmlhttp.responseText.trim() == "yes")
                window.location = '/store/' + storename + "-offers";
            else
                document.getElementById('menu-item-4943').click();

        }
    }

    xmlhttp.open("POST", "redirect.php", true);
    xmlhttp.send(fd);

}

function SubmitMissingOrder(storename) {


    var flag = 1;
    var orderId = document.getElementById('txtOrderId').value;
    if (orderId == "" || orderId.length > 30) {
        document.getElementById('txtOrderId').focus();
        document.getElementById('missingOrderErrorMsg').innerHTML = 'Provide Valid Order ID';
        return;
    }

    var txtRetailer = document.getElementById('txtRetailer').value;
    if (txtRetailer == "" || txtRetailer.length > 20) {
        document.getElementById('txtRetailer').focus();
        document.getElementById('missingOrderErrorMsg').innerHTML = 'Provide Retailer Name';
        return;
    }


    var DateOfOrder = document.getElementById('datepicker').value;

    if (DateOfOrder == "" || DateOfOrder.length > 20) {
        document.getElementById('datepicker').focus();
        document.getElementById('missingOrderErrorMsg').innerHTML = 'Please pick the order date';
        return;
    }

    var txtAmount = document.getElementById('txtAmount').value;

    if (txtAmount == "" || txtAmount.length > 7 || !isInt(txtAmount)) {
        document.getElementById('txtAmount').focus();
        document.getElementById('missingOrderErrorMsg').innerHTML = 'Please enter amount';
        return;
    }

    var captchaResult = getGCaptchaResponse();
    if (captchaResult == "") {
        document.getElementById('missingOrderErrorMsg').innerHTML = "Please answer the Captcha";
        return;
    }

    var fd = new FormData();
    fd.append("token", "psafsafjhl32j4bbvasf23124ci4werkh12u3bdjf89535dgfdjhh");
    fd.append("signInOrSignUp", "SubmitMissingOrder");
    fd.append("orderId", orderId);
    fd.append("txtRetailer", txtRetailer);
    fd.append("DateOfOrder", DateOfOrder);
    fd.append("txtAmount", txtAmount);
    fd.append("captchaResult", captchaResult);

    var xmlhttp;
    if (window.XMLHttpRequest) {// code for IE7+, Firefox, Chrome, Opera, Safari
        xmlhttp = new XMLHttpRequest();
    }
    else {// code for IE6, IE5
        xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
    }
    xmlhttp.onreadystatechange = function () {
        if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
            /*document.getElementById('ResultOfRequest').innerHTML=xmlhttp.responseText.trim();*/
            if (xmlhttp.responseText.trim() == "no")
                document.getElementById('missingOrderErrorMsg').innerHTML = 'Failed to submit order';
            else if (xmlhttp.responseText.trim() == "bot") {
                document.getElementById('missingOrderErrorMsg').innerHTML = "Plese refresh the page";
            }
            else {
                document.getElementById('missingOrderErrorMsg').innerHTML = xmlhttp.responseText.trim();
                document.getElementById('txtOrderId').value = '';
                document.getElementById('txtRetailer').value = '';
                document.getElementById('datepicker').value = '';
                document.getElementById('txtAmount').value = '';
            }

        }
    }

    xmlhttp.open("POST", "/login/login.php", true);
    xmlhttp.send(fd);

}

function isInt(value) {
    var x = parseFloat(value);
    return !isNaN(value) && (x | 0) === x;
}

function getGCaptchaResponse() {
    var ele = document.getElementsByClassName('g-recaptcha-response');
    for (var i = 0; i < ele.length; i++) {
        if (ele[i].value.length > 10)
            return ele[i].value;
    }
    ;
    return "";
}

// Scrolling smooth when clicked on AVAILABLE ESTORE menu
$('#cd-test').click(function () {
    $('html, body').animate({
        scrollTop: $($(this).attr('href')).offset().top
    }, 600);
    return false;
});

function ContactUs() {
    document.getElementById('contactus').style.display = 'block';
    $('html,body').scrollTop(0);
}


/*To fix the menu bar on top on scroll*/
$(window).bind('scroll', function () {
    if ($(window).scrollTop() > 35) {
        $('.socialbar').addClass('fixed');
        $('.clearfix').addClass('fixedmenu');
        $('.promotion-item').addClass('incrasemargin');
    } else {
        $('.socialbar').removeClass('fixed');
        $('.clearfix').removeClass('fixedmenu');
        $('.promotion-item').removeClass('incrasemargin');
    }
});

/*** Login sign up form ***/

/*$('#menu-item-4943').click(function(){
 document.getElementById("loginsignup").style.display = "block";
 document.getElementById("loginsignup").slideToggle();
 });*/

$('#loginemail').change(function (e) {
    $('loginbutton').focus();
});

$('#loginpassword').change(function (e) {
    $('loginbutton').focus();
});


//show search result as soon user focus on search bar//
$("#search-store-box").focusin(function () {
    $("#search-result-box").slideToggle("fast");
    document.getElementById('search-result-box').style.display = 'block';
    var searchValue = document.getElementById('search-store-box').value;
    changeSearchResult(searchValue);
    /*document.getElementById("search-result-box").slideToggle("slow");*/

}).focusout(function () {
    setTimeout(function () {
        //do what you need here
        $("#search-result-box").slideToggle("fast");
        document.getElementById('search-result-box').style.display = 'none';
    }, 200);
});

$('#search-button').on('click', function () {
    document.getElementById('search-store-box').focus();
    //alert("fuck you");
});

document.onkeydown = checkKey;

var totalItemInSearch = 0;
var selectedElement = 0;


function checkKey(e) {
    e = e || window.event;

    if (document.getElementById("search-result-box").style.display == 'block') {
        var selectli = document.getElementById("innerlist").innerHTML;


        if (e.keyCode == '38') {
            // up arrow
            if (selectedElement == 0 || selectedElement == 1)
                selectedElement = totalItemInSearch;

            selectedElement = (selectedElement - 1) % totalItemInSearch;

            for (i = 1; i < totalItemInSearch; i++) {

                if (i == selectedElement)
                    $("#selectonkeypress" + i).css("background", "#ddd");
                else
                    $("#selectonkeypress" + i).css("background", "#fff");
            }


        }
        else if (e.keyCode == '40') {
            // down arrow

            selectedElement = (selectedElement + 1) % totalItemInSearch;

            if (selectedElement == 0)
                selectedElement = 1;

            for (i = 1; i < totalItemInSearch; i++) {

                if (i == selectedElement)
                    $("#selectonkeypress" + i).css("background", "#ddd");
                else
                    $("#selectonkeypress" + i).css("background", "#fff");
            }
        }
        else if (e.keyCode == '13') {
            $("#clickmeonkeypress" + selectedElement)[0].click();
        }
    }


}


$('#search-store-box').on('input', function (e) {
    var searchValue = document.getElementById('search-store-box').value;
    changeSearchResult(searchValue);
});


function changeSearchResult(searchValue) {
    var i = 1;
    var htmlString = "<ol id='innerlist'>";

    for (var k in arrayOfStoresJS) {
        // use hasOwnProperty to filter out keys from the Object.prototype
        var storename = k.toLowerCase();
        searchValue = searchValue.toLowerCase();
        if (arrayOfStoresJS.hasOwnProperty(k) && (searchValue == "" || storename.indexOf(searchValue) > -1)) {
            htmlString = htmlString + "<li id='selectonkeypress" + i + "'><a id='clickmeonkeypress" + i + "' href='/store/" + k + "-offers'>" + k + "</a></li>";
            i++;
            if (i > 5) break;
        }
    }
    totalItemInSearch = i;
    htmlString = htmlString + "</ol>";
    document.getElementById('search-result-box').innerHTML = htmlString;
}

//show search result as soon user focus on search bar end//

/*display category result*/

$("#cd-category-by-store").mouseenter(function () {
    /*$("#category-result").slideToggle("fast");*/
    document.getElementById('category-result').style.display = 'block';
}).mouseleave(function () {
    setTimeout(function () {
        var isOver = $('#category-result').is(":hover");
        if (!isOver) {
            document.getElementById('category-result').style.display = 'none';

        }
    }, 0);
});
$("#category-result").mouseleave(function () {
    document.getElementById('category-result').style.display = 'none';
});


/* When user click on login button start*/

$("#header-loginbutton").mouseenter(function () {
    document.getElementById('loginbutton-result').style.display = 'block';

}).mouseleave(function () {
    setTimeout(function () {
        if ($('#loginbutton-result').is(":hover"));
        else
            document.getElementById('loginbutton-result').style.display = 'none';
    }, 500);
});

$(document).click(function (e) {
    setTimeout(function () {
        if ($('#loginbutton-result').is(":hover"));
        else
            document.getElementById('loginbutton-result').style.display = 'none';
    }, 50);

});

/* When user click on login button end*/

$("#copy-link-button").on('click', function () {
    var $copyLinkButton = document.getElementById("copy-link-button").href;
    /*var $temp = $("#copy-link-button");
     $("body").append($temp);
     $temp.val($(element).text()).select();
     document.execCommand("copy");
     $temp.remove();*/
    copyToClipboard($copyLinkButton);
    return false;
})

function copyToClipboard(text) {
    window.prompt("Copy to clipboard: Ctrl+C, Enter", text);
}

/*When user click on close button of terms and conditions on product store start*/

$(".product-terms-btn").on('click', function () {
    document.getElementById('product-terms-result').style.display = 'block';
})
$("#product-terms-close-btn").on('click', function () {
    document.getElementById('product-terms-result').style.display = 'none';
})

/*When user click on close button of terms and conditions on product store end*/

/*track user click on store start*/

function track(uid, storeName) {
    //alert(uid+"  "+storeName);

    var xmlhttp;
    if (window.XMLHttpRequest) {// code for IE7+, Firefox, Chrome, Opera, Safari
        xmlhttp = new XMLHttpRequest();
    }
    else {// code for IE6, IE5
        xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
    }
    var fd = new FormData();
    xmlhttp.onreadystatechange = function () {

        fd.append("token", "ashf23b54j35k32h5kj235j32k5jkhklj2h35j235j23j5235j3");
        fd.append("uid", uid);
        fd.append("storeName", storeName);
        if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
            /*document.getElementById('ResultOfRequest').innerHTML=xmlhttp.responseText.trim();*/
            if (xmlhttp.responseText.trim() == "yes")
                console.log("Tracked successfully");
            else
                console.log("Coud not track your order");

        }
    }

    xmlhttp.open("POST", "redirect.php", true);
    xmlhttp.send(fd);
}

/*track user click on store end*/

$("#move-to-all-store").on('click', function () {
    $("#all-store").slideDown("slow");
})


// sliding user reviews start///

var slidNumber = 1;
$('.review' + slidNumber).css("display", "block");

function slideSwitch() {
    if (slidNumber > 3)slidNumber = 1;

    for (var i = 1; i <= 3; i++) {
        $('.review' + i).fadeOut('slow');
        $('.review' + i).css("display", "none");
    }

    var className = "review" + i;

    $('.review' + slidNumber).fadeIn('slow');
    $('.review' + slidNumber).css("display", "block");

    slidNumber++;


}
$(function () {
    setInterval("slideSwitch()", 5000);
});


// sliding user reviews end///

$('#scrollup').click(function () {
    $("html, body").animate({
        scrollTop: 0
    }, 600);
    return false;
});


$("#mb-option-button").on('click', function () {
    $("#mb-menus").slideToggle("fast");
})