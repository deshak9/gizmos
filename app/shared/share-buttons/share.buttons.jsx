import React from 'react';
import axios from 'axios';
import styles from './share.buttons.css';
import SocialShareService from '../../services/social.share.service.jsx';
class ShareButtons extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            productUrl: '',
            name: '',
            description: '',
            imageUrl: ''
        };
    }

    componentDidMount() {
        this.setState({
            productUrl: this.props.currentPath,
            name: this.props.name,
            description: this.props.description,
            imageUrl: this.props.imageUrl
        });
    }

    shareOnFacebook() {
        SocialShareService.shareOnFacebook(this.state.name, this.state.description,
            this.state.productUrl, this.state.imageUrl);
    }

    shareOnGooglePlus() {
        SocialShareService.shareOnGooglePlus(this.state.productUrl, this.state.name);
    }

    shareOnTwitter() {
        SocialShareService.shareOnTwitter(this.state.productUrl, this.state.name);
    }

    shareOnPintrest() {
        SocialShareService.shareOnPintrest(this.state.productUrl, this.state.name);
    }

    shareOnWhatsapp() {
        SocialShareService.shareOnWhatsapp(this.state.productUrl, this.state.name);
    }

    render() {
        return (
            <div>
                <div className={"hide-in-desktop " + styles.shareButtonContent}>
                    <ul>
                        <li><a className={styles.facebookButton}
                               onClick={this.shareOnFacebook.bind(this)}>
                            <img width="25" src="/images/facebook.svg" alt="facebook share"/> Facebook</a></li>
                        <li><a className={styles.googlePlusButton}
                               onClick={this.shareOnGooglePlus.bind(this)}>
                            <img width="25" src="/images/googleplus.png" alt="google share"/> Google +</a></li>
                        <li><a className={styles.twitterButton}
                               onClick={this.shareOnTwitter.bind(this)}>
                            <img width="25" src="/images/twitter.svg" alt="twitter sharre"/> Twitter</a></li>
                    </ul>
                    <div className="clear-both-side"></div>
                </div>
                <div className={"hide-in-mobile " + styles.shareButtonContent}>
                    <ul>
                        <li><a className={styles.facebookButton}
                               onClick={this.shareOnFacebook.bind(this)}>
                            <img width="50" src="/images/facebook.svg" alt="facebook share"/> Facebook</a></li>
                        <li><a className={styles.googlePlusButton}
                               onClick={this.shareOnGooglePlus.bind(this)}>
                            <img width="50" src="/images/googleplus.png" alt="google share"/> Google +</a></li>
                        <li><a className={styles.twitterButton}
                               onClick={this.shareOnTwitter.bind(this)}>
                            <img width="50" src="/images/twitter.svg" alt="twitter share"/> Twitter</a></li>
                        <li className="hide-in-mobile">
                            <a className={styles.whatsappButton}
                               onClick={this.shareOnWhatsapp.bind(this)}>
                                <img width="50" src="/images/whatsapp.svg" alt="whatsapp share"/> Whatsapp</a></li>
                    </ul>
                    <div className="clear-both-side"></div>
                </div>
            </div>
        );
    }
}

export default ShareButtons;