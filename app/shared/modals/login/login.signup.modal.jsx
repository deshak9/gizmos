import React from 'react';
import {render} from 'react-dom';
import styles from './login.signup.modal.css';
import LoginModal from './login.modal.jsx';
import SignupModal from './signup.modal.jsx';

class LoginSignupModal extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            isLoginModal: true
        };
    }

    changeLoginSignupModal() {
        this.setState({isLoginModal: !this.state.isLoginModal})
    }

    render() {
        var loginOrSignupModal = this.state.isLoginModal ?
            <LoginModal isSingleModal={true} changeModal={this.changeLoginSignupModal.bind(this)}></LoginModal>
            :
            <SignupModal isSingleModal={true} changeModal={this.changeLoginSignupModal.bind(this)}></SignupModal>;
        var result = _isDesktop ?
            <div>
                <SignupModal isSingleModal={false} changeModal={null}></SignupModal>
                <div className="verticalLine"></div>
                <LoginModal isSingleModal={false} changeModal={null}></LoginModal>
            </div>
            :
            loginOrSignupModal;
        return (
            <div className={styles.loginSignupContainer}>
                {result}
                <img className="hide-me" src="/images/spin-alt.gif" alt="spinner"/>
            </div>
        );

    }
}

export default LoginSignupModal;