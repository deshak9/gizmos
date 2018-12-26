import React from 'react';
import {render} from 'react-dom';
import Modal from 'react-modal';
import style from './newsletter.modal.css';
import SubmitButton from '../../../shared/buttons/submit.button.jsx';
import InputValidatorService from '../../../services/input.validator.service.jsx';
import UserService from '../../../services/user.service.jsx';
import CookieGuy from '../../../services/cookie.guy.jsx';


class NewsletterModal extends React.Component {

    constructor(props) {
        super(props);
        this.userSubscribedCookieName = '_usfn';
        this.promotionAmount = '';
        this.state = {
            emailId: '',
            buttonState: 'enabled',
            isModalVisible: true,
            errorMessage: '',
            succeedMessage: '',
            successFulSubscription: false,
            isVisible: false
        };
    }

    componentDidMount() {
        var that = this;
        if (!isUserLoggedIn && !CookieGuy.getCookie(this.userSubscribedCookieName)) {
            setTimeout(function () {
                that.setState({isVisible: true});
            }, 4000, this);
        }

        if (visitorCountry == 'US') {
            this.promotionAmount = '$10';
        } else {
            this.promotionAmount = 'RS 500';
        }
    }

    handleEmailIdChange(e) {
        this.setState({emailId: e.target.value});
    }

    closeModal() {
        this.setState({isModalVisible: false});
        CookieGuy.setCookie(this.userSubscribedCookieName, 'true', {});
    }

    doSubmit(e) {
        e.preventDefault();
        if (InputValidatorService.validateEmail(this.state.emailId)) {
            this._doSubmit();
        } else {
            this.setState({errorMessage: 'Please enter a valid email id'});
        }
    }

    _doSubmit() {
        this.setState({buttonState: 'inProgress', errorMessage: ''});
        UserService.newsletterSignup(this.state.emailId)
            .then(res => {
                if (res.data.response == true) {
                    this.setState({succeedMessage: 'Thanks for the subscription', successFulSubscription: true});
                    CookieGuy.setCookieForOneYear(this.userSubscribedCookieName, 'true');
                } else {
                    this.setState({buttonState: 'enabled', errorMessage: 'Something went wrong'});
                }
            });
    }

    render() {
        return (
            this.state.isVisible ?
                <Modal
                    isOpen={this.state.isModalVisible}
                    overlayClassName={style.modalOverlay}
                    contentLabel="newsletter"
                    className={style.newsletterContainer}>

                    <div className={style.newsletterContent}>
                        <div className={"hide-in-desktop " + style.newsLetterLeftContainer}>
                            <h2 className={style.mainHeading}>WIN {this.promotionAmount}</h2>

                            <p>Subscribe to our newsletter and get a chance to win Amazon gift card of
                                worth {this.promotionAmount}. <a href="/terms#newsletter" target="_blank">T&#38;C</a></p>
                            <img src="/images/right-arrow-icon.png" alt="right arrow"/>
                            <br/>
                            <a onClick={this.closeModal.bind(this)}>NO THANKS</a>
                        </div>
                        <div className={style.newsLetterRightContainer}>
                            <h2 className={style.mainHeading}>SUBSCRIBE</h2>
                            <img src="/images/mail_grey.png" alt="mail grey"/>
                            <br/>

                            <form>
                                <input className="inputTextBox inputTextBoxSize"
                                       type="textbox"
                                       onChange={this.handleEmailIdChange.bind(this)}
                                       placeholder="Enter your email"/>

                                <span className="error-message">{this.state.errorMessage}</span>
                                <span className="succeed-message">{this.state.succeedMessage}</span>


                                {
                                    this.state.successFulSubscription ?
                                        <SubmitButton
                                            onButtonClick={this.closeModal.bind(this)}
                                            buttonValue="Close"
                                            buttonColor={submitButtonBackground}
                                            buttonHoverColor={submitButtonHoverBackground}
                                            buttonState='enabled'>
                                        </SubmitButton>
                                        :
                                        <SubmitButton
                                            onButtonClick={this.doSubmit.bind(this)}
                                            buttonValue="Submit"
                                            buttonColor={submitButtonBackground}
                                            buttonHoverColor={submitButtonHoverBackground}
                                            buttonState={this.state.buttonState}>
                                        </SubmitButton>
                                }

                                <a className="hide-in-mobile" onClick={this.closeModal.bind(this)}>NO THANKS</a>
                            </form>
                        </div>
                        <h2 className="hide-me">Top 10 gadgets to buy online</h2>
                    </div>
                </Modal>
                :
                <div></div>

        );
    }
}

export default NewsletterModal;