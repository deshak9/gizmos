import React from 'react';
import styles from './news.letter.signup.scss';
import InputValidatorService from '../../services/input.validator.service.jsx';
import UserService from '../../services/user.service.jsx';
import CookieGuy from '../../services/cookie.guy.jsx';

class NewsLetterSignup extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            emailId: '',
            buttonState: true,
            successFulSubscription: false,
            errorMessage: '',
            isVisible: false,
            isPopupShown: false,
            popupCssSelector: '',
            subscribeButtonText: 'Subscribe'
        };

        this.userSubscribedCookieName = '_usfn';
        this.didUserClickHideSingupNewsletter = '_ducsn';
        this.showPopupCss = "news-letter-signup-show";
        this.hidePopupCss = "news-letter-signup-hide";
    }

    componentDidMount() {
        let noOfSeconds = 2000;
        console.log(CookieGuy.isCookieEnabled());
        if (!CookieGuy.isCookieEnabled()) {
            setTimeout(function () {
                this.setState({isPopupShown: false, isVisible: true});
            }.bind(this), noOfSeconds);
            return;
        }

        if (!isUserLoggedIn && !CookieGuy.getCookie(this.userSubscribedCookieName)) {

            console.log("CookieGuy.getCookie(this.didUserClickHideSingupNewsletter)", CookieGuy.getCookie(this.didUserClickHideSingupNewsletter));
            if (CookieGuy.getCookie(this.didUserClickHideSingupNewsletter) == 'true') {
                setTimeout(function () {
                    console.log("comming here");
                    this.setState({isPopupShown: false, isVisible: true});
                }.bind(this), noOfSeconds);
            } else {
                setTimeout(function () {
                    this.setState({isPopupShown: true, isVisible: true, popupCssSelector: this.showPopupCss});
                }.bind(this), noOfSeconds);
            }

        }
    }

    handleEmailIdChange(e) {
        this.setState({emailId: e.target.value});
    }

    doSubmit(e) {
        e.preventDefault();
        if (!this.state.buttonState) {
            return;
        }
        if (InputValidatorService.validateEmail(this.state.emailId)) {
            this._doSubmit();
        } else {
            this.setState({errorMessage: 'Please enter a valid email id'});
        }
    }

    _doSubmit() {
        this.setState({subscribeButtonText: 'Subscribing...', buttonState: false, errorMessage: ''});
        UserService.newsletterSignup(this.state.emailId)
            .then(res => {
                if (res.data.response == true) {
                    this.setState({errorMessage: 'Thanks for the subscription', subscribeButtonText: 'Subscribed'});
                    CookieGuy.setCookieForOneYear(this.userSubscribedCookieName, 'true');
                } else {
                    this.setState({errorMessage: 'Something went wrong, please try again'});
                    this.setState({buttonState: true});
                }
            });
    }

    hideSignupPopup() {
        console.log("arrow button clicked");
        if (this.state.isPopupShown) {
            this.setState({isPopupShown: false, popupCssSelector: this.hidePopupCss});
            CookieGuy.setCookieForOneYear(this.didUserClickHideSingupNewsletter, true);
        } else {
            this.setState({isPopupShown: true, popupCssSelector: this.showPopupCss});
            CookieGuy.setCookieForOneYear(this.didUserClickHideSingupNewsletter, false);
        }
    }

    render() {
        return (

            this.state.isVisible ?
                <div className={"news-letter-signup-container " + this.state.popupCssSelector}>
                    <div onClick={this.hideSignupPopup.bind(this)} className="newsletter-signup-circle">
                        {
                            this.state.isPopupShown ?
                                <img src="/images/down-arrow.png"/>
                                :
                                <img src="/images/up-arrow.png"/>
                        }

                    </div>
                    <form onSubmit={this.doSubmit.bind(this)}>
                        <div className="newsletter-signup-input">
                            <h2>Newsletter Signup</h2>

                            <p>Receive the coolest tech, gadgets and future products straight to your inbox.</p>

                            <label>{this.state.errorMessage}</label>
                            <input type="textbox"
                                   onChange={this.handleEmailIdChange.bind(this)}
                                   placeholder="You email here"/>
                            <a onClick={this.doSubmit.bind(this)}>{this.state.subscribeButtonText}</a>
                        </div>
                    </form>
                </div>

                : <div></div>

        );
    }
}

export default NewsLetterSignup;