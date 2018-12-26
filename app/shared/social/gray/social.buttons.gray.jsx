import React from 'react';
import axios from 'axios';
import {Route, Router} from 'react-router';
import style from './social.buttons.gray.scss';
import SocialShareService from '../../../services/social.share.service.jsx';
class SocialButtonsGray extends React.Component {

    constructor(props) {
        super(props);

        this.state = {};
    }

    componentDidMount() {
    }

    shareOnFacebook() {
        SocialShareService.shareOnFacebook(this.props.name, this.props.description,
            this.props.productUrl, this.props.imageUrl);
    }

    shareOnGooglePlus() {
        SocialShareService.shareOnGooglePlus(this.props.productUrl, this.props.name);
    }

    shareOnTwitter() {
        SocialShareService.shareOnTwitter(this.props.productUrl, this.props.name);
    }

    shareOnPintrest() {
        SocialShareService.shareOnPintrest(this.props.productUrl, this.props.name);
    }

    shareOnWhatsapp() {
        SocialShareService.shareOnWhatsapp(this.props.productUrl, this.props.name);
    }


    render() {
        return (
            <div>
                <div className="social-button-gray-container">
                    <ul>
                        <li className="social-button-gray-fb"
                            onClick={this.shareOnFacebook.bind(this)}></li>
                        <li className="social-button-gray-tw"
                            onClick={this.shareOnTwitter.bind(this)}></li>
                        <li className="social-button-gray-gp"
                            onClick={this.shareOnGooglePlus.bind(this)}></li>
                        <li className="social-button-gray-pr"
                            onClick={this.shareOnPintrest.bind(this)}></li>
                        <div className="clear-both-side"></div>
                    </ul>
                    <div className="clear-both-side"></div>
                </div>
                <div className="clear-both-side"></div>
            </div>

        );
    }
}

export default SocialButtonsGray;
