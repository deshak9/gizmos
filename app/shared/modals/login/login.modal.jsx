import React from 'react';
import {render} from 'react-dom';
import styles from './login.modal.css';
import loginStyles from './login.signup.modal.css';
import UserService from '../../../services/user.service.jsx';
import InputValidatorService from '../../../services/input.validator.service.jsx';
import ForgotPasswordModal from './forgot.password.modal.jsx';
import LoadingSpinner from '../../LoadingSpinner.jsx';
import SubmitButton from '../../../shared/buttons/submit.button.jsx';

class LoginModal extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            errorMessage: '',
            emailId: '',
            password: '',
            changeLoginResetModal: true,
            loginButtonState: 'enabled',
            fBButtonState: 'enabled'

        };
    }

    changeToSignupModal() {
        this.props.changeModal();
    }

    handleEmailIdChange(event) {
        this.setState({emailId: event.target.value.trim()});
    }

    handlePasswordChange(event) {
        this.setState({password: event.target.value.trim()});
    }

    doLogin(e) {
        e.preventDefault();
        this.setState({errorMessage: ''});
        if (this.validateInput()) {
            this._doLogin();
        }
    }

    loginWithFacebook() {
        this.setState({fBButtonState: 'inProgress'});
        FB.login(function (response) {
            if (response.status == "connected") {
                FB.api('/me?scope=email', {fields: 'name, email'}, function (response2) {
                    UserService.loginWithFacebook(response2.email, response2.id, response.authResponse.accessToken)
                        .then(res => {
                            if (res.data['response'] == true) {
                                window.location.href = ''
                            }
                        });
                });
            }

        }, {fields: 'public_profile, email'}, this);
    }

    changeToForgotPasswordModal() {
        this.setState({changeLoginResetModal: !this.state.changeLoginResetModal});
    }

    _doLogin() {
        this.setState({loginButtonState: 'inProgress'});
        UserService.login(this.state.emailId, this.state.password)
            .then(res => {
                if (res.data['response'] == true) {
                    window.location.href = ''
                } else {
                    this.setState({
                        errorMessage: 'Incorrect email or password',
                        loginButtonState: 'enabled'
                    });
                }
            });
    }

    validateInput() {
        if (!InputValidatorService.validateEmail(this.state.emailId)) {
            this.setState({errorMessage: 'Please enter valid Email Id'});
            return false;
        }

        if (!InputValidatorService.validatePassword(this.state.password)) {
            this.setState({errorMessage: 'Password should be at least 6 characters'});
            return false;
        }

        return true;
    }

    render() {
        var loginButtonValue = this.state.disableButton ?
            'Logging in...' : 'Login';
        var isModalChangeVisible = this.props.isSingleModal ?
            <div className={styles.notYetRegistered}>
                <a onClick={this.changeToSignupModal.bind(this)}>Not yet
                    registered?</a>
            </div>
            :
            "";
        return (
            this.state.changeLoginResetModal ?
                <div className={styles.loginContainer+" "+styles.loginContainerSize}>
                    <form>
                        <h1 className={loginStyles.headingName}>Login here</h1>
                        <br/>
                        <input type="textbox"
                               onChange={this.handleEmailIdChange.bind(this)}
                               className="inputTextBox inputTextBoxSize"
                               placeholder="Email"/>
                        <input type="password"
                               onChange={this.handlePasswordChange.bind(this)}
                               className="inputTextBox inputTextBoxSize"
                               placeholder="Password"/>

                        <span className="error-message">{this.state.errorMessage}</span>

                        <div className={styles.forgotPassword}>
                            <a onClick={this.changeToForgotPasswordModal.bind(this)}>Forgot password?</a>
                        </div>
                        <SubmitButton
                            onButtonClick={this.doLogin.bind(this)}
                            buttonValue="Login"
                            buttonColor={submitButtonBackground}
                            buttonHoverColor={submitButtonHoverBackground}
                            buttonState={this.state.loginButtonState}>
                        </SubmitButton>

                        <div className={"align-center "+ styles.orText}> OR</div>

                        <SubmitButton
                            onButtonClick={this.loginWithFacebook.bind(this)}
                            buttonValue="Login with Facebook"
                            buttonColor="#4e69a2"
                            buttonHoverColor={submitButtonHoverBackground}
                            buttonState={this.state.fBButtonState}>
                        </SubmitButton>
                        {isModalChangeVisible}
                    </form>
                </div>

                :
                <ForgotPasswordModal changeModal={this.changeToForgotPasswordModal.bind(this)}></ForgotPasswordModal>
        );

    }
}

export default LoginModal;