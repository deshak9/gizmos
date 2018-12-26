import React from 'react';
import {render} from 'react-dom';
import axios from 'axios';
import styles from './signup.modal.css';
import loginStyles from './login.signup.modal.css';
import UserService from '../../../services/user.service.jsx';
import InputValidatorService from '../../../services/input.validator.service.jsx';
import SubmitButton from '../../../shared/buttons/submit.button.jsx';

class SignupModal extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            userName: '',
            emailId: '',
            password: '',
            errorMessage: '',
            signUpButtonState: 'enabled'
        };
    }

    handleNameChange(event) {
        this.setState({userName: event.target.value.trim()});
    }

    handleEmailIdChange(event) {
        this.setState({emailId: event.target.value.trim()});
    }

    handlePasswordChange(event) {
        this.setState({password: event.target.value.trim()});
    }

    componentDidMount() {
    }

    doSignup(e) {
        e.preventDefault();
        if (this.validateInput()) {
            this._doSignup();
        }
    }

    validateInput() {

        if (!InputValidatorService.validateOnlyText(this.state.userName, 2, 50)) {
            this.setState({errorMessage: 'Please enter a valid name'});
            return false;
        }

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

    _doSignup() {
        this.setState({signUpButtonState: 'inProgress'});
        UserService.newRegistration(this.state.userName, this.state.emailId, this.state.password)
            .then(res => {
                if (res.data['response'] == true) {
                    window.location.href = ''
                } else {
                    this.setState({
                        errorMessage: 'You are already registered, try logging in',
                        signUpButtonState: 'enabled'
                    })
                }

            });
    }

    changeToLoginModal() {
        this.props.changeModal();
    }

    render() {
        var signupButtonValue = this.state.signupButtonDisabled ? 'Joining...' : 'Join us';
        var isModalChangeVisible = this.props.isSingleModal ?
            <div className={styles.notYetRegistered}>
                <a onClick={this.changeToLoginModal.bind(this)}>Sign in</a>
            </div>
            :
            "";
        return (
            <div className={styles.signupContainer+" "+styles.signupContainerSize}>
                <form>
                    <h1 className={loginStyles.headingName}>Signup here</h1>
                    <br/>

                    <input type="textbox" className="inputTextBox inputTextBoxSize"
                           onChange={this.handleNameChange.bind(this)}
                           placeholder="Name"/>

                    <input type="textbox" className="inputTextBox inputTextBoxSize"
                           onChange={this.handleEmailIdChange.bind(this)}
                           placeholder="Email"/>
                    <input type="password" className="inputTextBox inputTextBoxSize"
                           onChange={this.handlePasswordChange.bind(this)}
                           placeholder="Password"/>

                    <span className="error-message">{this.state.errorMessage}</span>

                    <SubmitButton
                        onButtonClick={this.doSignup.bind(this)}
                        buttonValue="Join us"
                        buttonColor={submitButtonBackground}
                        buttonHoverColor={submitButtonHoverBackground}
                        buttonState={this.state.signUpButtonState}>
                    </SubmitButton>
                </form>

                {isModalChangeVisible}
            </div>
        );

    }
}

export default SignupModal;