import {render} from 'react-dom';
import React from 'react';
import style from './social.buttons.color.scss';
import SocialShareService from '../../../services/social.share.service.jsx';
class SocialButtonsColor extends React.Component {

    constructor(props) {
        super(props);

        this.state = {};
        this.productUrl = pageProductUrl;
        this.name = pageProductName;
        this.imageUrl = pageProductImageUrl;
        this.description = pageProductDescription;
    }

    componentDidMount() {
    }

    shareOnFacebook() {
        SocialShareService.shareOnFacebook(this.name, this.description,
            this.productUrl, this.imageUrl);
    }

    shareOnGooglePlus() {
        SocialShareService.shareOnGooglePlus(this.productUrl, this.name);
    }

    shareOnTwitter() {
        SocialShareService.shareOnTwitter(this.productUrl, this.name);
    }

    shareOnPintrest() {
        SocialShareService.shareOnPintrest(this.productUrl, this.name);
    }

    shareOnWhatsapp() {
        SocialShareService.shareOnWhatsapp(this.productUrl, this.name);
    }


    render() {
        return (
            <div>
                <div className="social-button-color-container">
                    <div className="social-button-color-fb social-button-color-common"
                         onClick={this.shareOnFacebook.bind(this)}>
                        <label>Share</label>
                        <img src="/images/social/fb-64-white.gif"/>

                    </div>
                    <div className="social-button-color-tw social-button-color-common"
                         onClick={this.shareOnTwitter.bind(this)}>
                        <label>Tweet</label>
                        <img src="/images/social/tw-64-white.gif"/>
                    </div>
                    <div className="social-button-color-gp social-button-color-common"
                         onClick={this.shareOnGooglePlus.bind(this)}>
                        <label>+1</label>
                        <img src="/images/social/gp-64-white.gif"/>
                    </div>
                    <div className="social-button-color-pr social-button-color-common"
                         onClick={this.shareOnPintrest.bind(this)}>
                        <label>Pin</label>
                        <img src="/images/social/pr-64-white.gif"/>
                    </div>
                    {
                        _isDesktop ? ""
                            :
                            <div className="social-button-color-wa social-button-color-common"
                                 onClick={this.shareOnWhatsapp.bind(this)}>
                                <label>Message</label>
                                <img src="/images/social/wa-64-white.gif"/>
                            </div>
                    }
                    <div className="clear-both-side"></div>
                </div>
                <div className="clear-both-side"></div>
            </div>

        );
    }
}

if (socialButtonsColor) {
    render(<SocialButtonsColor/>, document.getElementById('social-buttons-color'));
}
export default SocialButtonsColor;
