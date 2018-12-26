import React from 'react';
import {render} from 'react-dom';
import styles from './forgot.password.modal.css';
import loginSignupStyles from './login.signup.modal.css';
import loginStyles from './login.modal.css';
import UserService from '../../../services/user.service.jsx';
import InputValidatorService from '../../../services/input.validator.service.jsx';
import Button from 'react-button';
import SubmitButton from '../../../shared/buttons/submit.button.jsx';
var inProgressBtn = {
    background: 'url(/images/spin-alt.gif) no-repeat 50% 50%',
    backgroundSize: '3vw',
    backgroundColor: '#ff5858'
};

class LoginModal extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            errorMessage: '',
            succeedMessage: '',
            disableButton: false,
            resetButtonValue: 'Reset',
            inProgressButton: {},
            emailId: '',
            buttonState: 'enabled'
        };
    }

    changeToLoginModal() {
        this.props.changeModal();
    }

    handleEmailIdChange(event) {
        this.setState({emailId: event.target.value.trim()});
    }

    doReset(e) {
        e.preventDefault();
        if (this.validateInput()) {
            this._doReset();
        }
    }

    _doReset() {
        this.setState({
            errorMessage: '', buttonState: 'inProgress'
        });
        UserService.resetPassword(this.state.emailId)
            .then(res => {
                if (res.data['response'] == true) {
                    this.setState({
                        succeedMessage: "Please check your email to reset your password",
                        buttonState: 'enabled'
                    })
                } else {
                    this.setState({
                        errorMessage: 'Email id does not exist',
                        buttonState: 'enabled'
                    })
                }
            });
    }

    validateInput() {
        if (!InputValidatorService.validateEmail(this.state.emailId)) {
            this.setState({errorMessage: 'Please enter valid Email Id'});
            return false;
        }

        return true;
    }

    render() {
        return (
            <div className={loginStyles.loginContainer+" "+loginStyles.loginContainerSize}>
                <form>
                    <h1 className={loginSignupStyles.headingName}>Forgot password</h1>
                    <br/>
                    <input type="textbox"
                           onChange={this.handleEmailIdChange.bind(this)}
                           className="inputTextBox inputTextBoxSize"
                           placeholder="Email"/>

                    <span className="error-message">{this.state.errorMessage}</span>
                    <span className="succeed-message">{this.state.succeedMessage}</span>

                    <SubmitButton
                        onButtonClick={this.doReset.bind(this)}
                        buttonValue="Reset"
                        buttonColor={submitButtonBackground}
                        buttonHoverColor={submitButtonHoverBackground}
                        buttonState={this.state.buttonState}>
                    </SubmitButton>

                    <div className={loginStyles.notYetRegistered}>
                        <a onClick={this.changeToLoginModal.bind(this)}>Login</a>
                    </div>
                </form>
            </div>
        );

    }
}

export default LoginModal;