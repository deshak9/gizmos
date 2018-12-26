import {render} from 'react-dom';
import React from 'react';
import styles from './app.footer.scss';
import InputValidatorService from '../../services/input.validator.service.jsx';
import UserService from '../../services/user.service.jsx';
import AppFooterSubscribeButton from './app.footer.subscribe.button.jsx';

class AppFooter extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            emailId: ''
        };

        this.userSubscribedCookieName = '_usfn';
        this.buttonState
    }

    componentDidMount() {
    }

    handleEmailIdChange(e) {
        this.setState({emailId: e.target.value});
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
                    this.setState({errorMessage: 'Something went wrong'});
                }
            });
    }

    render() {
        return (
            <footer>
                <div className="full-width">
                    <div className="footer-top">
                        <div className="page-width">
                            <div className="footer-top-container">
                                <div className="footer-top-about">
                                    <div className="footer-title">
                                        About Us
                                    </div>
                                    <div className="footer-content">
                                        We are among the world's best websites to help our users to find latest,
                                        innovative and cool gadgets available in the market and also help them by
                                        providing availability of product in famous stores.
                                    </div>
                                </div>
                                <div className="footer-top-link">
                                    <div className="footer-title">
                                        Links
                                    </div>
                                    <div className="footer-content">
                                        <div className="footer-content-links">
                                            <a href="/">Home</a>
                                        </div>
                                    </div>
                                </div>
                                <div className="footer-top-contact">
                                    <div className="footer-title">
                                        Contact Us
                                    </div>
                                    <div className="footer-content">
                                        care@gadgetclues.com
                                    </div>
                                </div>
                            </div>
                            <div className="footer-title footer-subscribe-text">
                                Newsletter Signup
                            </div>
                            <div className="footer-content footer-subscribe-text">
                                Receive the coolest tech, gadgets and future products straight to your inbox.
                            </div>
                            <AppFooterSubscribeButton></AppFooterSubscribeButton>
                        </div>
                    </div>
                    <div className="footer-bottom">
                        <div className="page-width">
                            <div className="footer-bottom-content">
                                <div className="footer-bottom-copyrights">
                                    &copy; 2017 gadgetclues.com
                                </div>
                                <div className="footer-bottom-social">
                                    <a href="https://www.facebook.com/thegadgetclues" target="_blank"><img
                                        src="/images/social/fb-64-white.gif"/></a>
                                    <a href="https://twitter.com/gadget_clues" target="_blank"><img
                                        src="/images/social/tw-64-white.gif"/></a>
                                    <a href="https://plus.google.com/108995328016403560945" target="_blank"><img
                                        src="/images/social/gp-64-white.gif"/></a>
                                    <a href="https://www.instagram.com/gadget_clues" target="_blank"><img
                                        src="/images/social/ig-64-white.gif"/></a>
                                </div>
                                <div className="footer-bottom-links">
                                    <a href="/sitemap.xml" target="_blank">Sitemap</a>
                                    <a href="/privacypolicy" target="_blank">Privacy</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>

        );
    }
}

if (pageFooterView) {
    render(<AppFooter/>, document.getElementById('app-footer'));
}

export default AppFooter;