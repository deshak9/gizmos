import React from 'react';
import styles from './app.footer.scss';
import InputValidatorService from '../../services/input.validator.service.jsx';
import UserService from '../../services/user.service.jsx';
import CookieGuy from '../../services/cookie.guy.jsx';

class AppFooterSubscribeButton extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            emailId: '',
            buttonState: true,
            subscribeButtonText: 'Subscribe',
            errorMessage: 'Enter your email here',
            successFulSubscription: false
        };

        this.userSubscribedCookieName = '_usfn';
    }

    componentDidMount() {
    }

    handleEmailIdChange(e) {
        this.setState({emailId: e.target.value});
    }

    doSubmit(e) {
        e.preventDefault();
        if (!this.state.buttonState || this.state.successFulSubscription) {
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
                    this.setState({subscribeButtonText: 'Thanks for the subscription', successFulSubscription: true});
                    CookieGuy.setCookieForOneYear(this.userSubscribedCookieName, 'true');
                } else {
                    this.setState({subscribeButtonText: 'Something went wrong'});
                    this.setState({buttonState: true});
                }
            });
    }

    render() {
        return (
            <form onSubmit={this.doSubmit.bind(this)}>
                <div className="footer-content footer-content-subscribe">

                    <input type="textbox"
                           onChange={this.handleEmailIdChange.bind(this)}
                           placeholder={this.state.errorMessage}/>
                    <a>{this.state.subscribeButtonText}</a>
                </div>
            </form>
        );
    }
}

export default AppFooterSubscribeButton;