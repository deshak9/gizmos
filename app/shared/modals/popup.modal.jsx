import React from 'react';
import {render} from 'react-dom';
import Modal from 'react-modal';
import axios from 'axios';
import styles from './popup.modal.css';
import Dimensions from 'react-dimensions';
import LoginSignupModal from './login/login.signup.modal.jsx';
import NewsletterModal from './newsletter/newsletter.modal.jsx';


class PopupModal extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            modalIsOpen: true
        };
        this.openModal = this.openModal.bind(this);
        this.closeModal = this.closeModal.bind(this);
        modalTypes['login-signup'] = <LoginSignupModal></LoginSignupModal>;
        modalTypes['newsletter'] = <NewsletterModal></NewsletterModal>;
    }

    openModal() {
        this.setState({modalIsOpen: true});
    }


    afterOpenModal() {
    }

    closeModal() {
        this.setState({modalIsOpen: false});
        this.props.hideModal();
    }


    render() {
        var result = modalTypes[this.props.modalType];
        return (
            <div>
                <Modal isOpen={this.state.modalIsOpen}
                       overlayClassName={styles.modalOverlay}
                       className={styles.modalContent+" "+styles.modalContentSize}
                       contentLabel="Login Modal"
                       onRequestClose={this.closeModal}>
                    <div className={styles.modalActualContainer+" "+styles.modalActualContainerSize}>
                        <div className={styles.closeModalButton}>
                            <a onClick={this.closeModal}>X</a>
                        </div>
                        {result}
                    </div>
                </Modal>
            </div>
        );
    }
}

let modalTypes = {

};

export default PopupModal;