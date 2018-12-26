import React from 'react';
import styles from './reset.password.scss';
import loginCss from '../../modals/login/login.modal.css';
import UserService from '../../../services/user.service.jsx';
import InputValidatorService from '../../../services/input.validator.service.jsx';
import SubmitButton from '../../../shared/buttons/submit.button.jsx';
import Header from '../../header/header.jsx';
class ResetPassword extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            errorMessage: '',
            succeedMessage: '',
            password: '',
            rePassword: '',
            resetButtonState: 'enabled'
        }
    }

    doReset(e) {
        e.preventDefault();
        if (this.validateInput()) {
            this._doReset();
        }
    }

    validateInput() {

        if (!InputValidatorService.validatePassword(this.state.password)) {
            this.setState({errorMessage: 'Password should be at least 6 characters'});
            return false;
        }
        if (this.state.password !== this.state.rePassword) {
            this.setState({errorMessage: 'Password did not match'});
            return false;
        }

        return true;
    }

    _doReset() {
        this.setState({resetButtonState: 'inProgress', errorMessage: ''});
        UserService.resetValidation(this.state.password, this.props.location.query._l)
            .then(res => {
                if (res.data['response'] == true) {
                    this.setState({
                        succeedMessage: 'Password got reset, try logging in, You will be redirected ' +
                        'to home page in 5 seconds'
                    });

                    setTimeout(function () {
                        window.location.href = '/';
                    }.bind(this), 5000);

                } else {
                    this.setState({
                        errorMessage: 'This link is expired, try reset password again',
                        resetButtonState: 'enabled'
                    });
                }
            });
    }


    handlePasswordChange(event) {
        this.setState({password: event.target.value.trim()});
    }

    handleRePasswordChange(event) {
        this.setState({rePassword: event.target.value.trim()});
    }

    componentDidMount() {
        /*this.props.location.query._l*/
    }

    render() {
        return (
            <div>
                <div className="full-width">
                    <div className="page-width">
                        <div className={styles.resetPasswordContainer}>
                            <div className={styles.resetPasswordContent}>
                                <form>
                                    <label className="normal-font-size">Enter your new password below</label>

                                    <div className={styles.inputContainer}>
                                        <label className="normal-font-size">New password</label>
                                        <input type="password"
                                               onChange={this.handlePasswordChange.bind(this)}
                                               placeholder="password"></input>
                                        <input type="password"
                                               onChange={this.handleRePasswordChange.bind(this)}
                                               placeholder="re-enter password"></input>
                                        <span className="error-message">{this.state.errorMessage}</span>
                                        <span className="succeed-message">{this.state.succeedMessage}</span>
                                        <SubmitButton
                                            onButtonClick={this.doReset.bind(this)}
                                            buttonValue="Submit"
                                            buttonColor={submitButtonBackground}
                                            buttonHoverColor={submitButtonHoverBackground}
                                            buttonState={this.state.resetButtonState}>
                                        </SubmitButton>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default ResetPassword;