import React from 'react';
import axios from 'axios';
import PopupModal from '../shared/modals/popup.modal.jsx';
import GadgetsService from '../services/gadgets.service.jsx';
import SocialShareService from '../services/social.share.service.jsx';
import {Route, Router} from 'react-router';
class GadgetCard extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            isSocialOption: false,
            isLiked: false,
            likes: 0,
            isLoginModalOn: false,
            productUrl: ''

        };
    }

    componentDidMount() {
        /// Replace all space with dash(-)
        let name = this.props.name.replace(/ /g, "-");
        let absoluteUrl = `/gadgets/${name}`;
        this.setState({
            isLiked: this.props.isLiked, likes: parseInt(this.props.likes),
            productUrl: absoluteUrl
        });
    }

    shareOnFacebook() {
        SocialShareService.shareOnFacebook(this.props.name, this.props.description,
            this.state.productUrl, this.props.imageUrl);
    }

    shareOnGooglePlus() {
        SocialShareService.shareOnGooglePlus(this.state.productUrl, this.props.name);
    }

    shareOnTwitter() {
        SocialShareService.shareOnTwitter(this.state.productUrl, this.props.name);
    }

    shareOnPintrest() {
        SocialShareService.shareOnPintrest(this.state.productUrl, this.props.name);
    }

    openLoginModal() {
        this.setState({isLoginModalOn: true});
    }

    likeThisProduct() {
        let data = {
            productId: this.props.productId
        };

        GadgetsService.saveLikeOnProduct(data);

        this.setState({isLiked: true, likes: this.state.likes + 1});
    }

    shareOptions(e) {
        this.setState({isSocialOption: !this.state.isSocialOption});
    }

    hideModal() {
        this.setState({isLoginModalOn: false});
    }

    navigateToProductPage() {
        window.location.href = this.state.productUrl;
    }

    render() {
        var shareButtonsVisible =
            !this.state.isSocialOption ?
            {display: 'none'} :
            {display: 'block'};

        var likeButton;
        if (isUserLoggedIn) {
            if (this.state.isLiked) {
                likeButton =
                    <a className="mobile-button-padding">
                        <p>{this.state.likes}</p>
                        <img src="/images/heart-red.png" alt="love it like it"/>
                    </a>

            } else {
                likeButton =
                    <a onClick={this.likeThisProduct.bind(this)} className="mobile-button-padding">
                        <p>{this.state.likes}</p>
                        <img src="/images/heart-grey.png" alt="love it like it"/>
                    </a>
            }
        } else {
            likeButton =
                <a onClick={this.openLoginModal.bind(this)} className="mobile-button-padding">
                    <p>{this.state.likes}</p>
                    <img src="/images/heart-grey.png" alt="love it like it"/>
                </a>
        }

        var productImageStyle = {
            background: 'url(' + this.props.imageUrl + ') no-repeat 50% 50%', backgroundSize: 'cover'
        };

        let loginModal = this.state.isLoginModalOn
            ? <PopupModal hideModal={this.hideModal.bind(this)} modalType="login-signup"></PopupModal>
            : "";

        return (

            <div className="gadget-card gadget-card-size">
                <div style={productImageStyle} className="gadget-image-container"
                     onClick={this.navigateToProductPage.bind(this)}>
                    <div className="image-hover-container">
                        <div className="video-buttons">
                            <img src="/images/youtube-icon.png" alt="youtube icon"/>
                        </div>
                        <div className="hovered-product-desc">
                            {this.props.name}
                        </div>
                    </div>
                </div>
                <div className="gadget-card-bottom gadget-card-bottom-size">
                    <ul>
                        <li className="gadget-card-desc normal-font-size">
                            <a className="text-truncate gadget-name" href={this.state.productUrl}>{this.props.name}</a>
                            <a className="text-truncate gadget-description" href={this.state.productUrl}>{this.props.description}</a>
                        </li>
                        <li onClick={this.shareOptions.bind(this)} className="share-button share-button-size" title="tell your friends">
                            <img src="/images/share.png" alt="share with friends"/>
                            <ul style={shareButtonsVisible} className="social-product-share social-product-share-size">
                                <li><a onClick={this.shareOnFacebook.bind(this)}>Facebook</a></li>
                                <li><a onClick={this.shareOnGooglePlus.bind(this)}
                                       id="sharePost">Google +</a></li>
                                <li><a onClick={this.shareOnTwitter.bind(this)}
                                    >Twitter</a></li>
                                <li>
                                    <a onClick={this.shareOnPintrest.bind(this)}>Pinterest</a>
                                </li>
                            </ul>
                        </li>
                        <li className="like-button like-button-size" title="do you like it">
                            {likeButton}
                        </li>
                    </ul>
                    <div className="clear-both-side"/>
                </div>
                {loginModal}
            </div>
        );
    }
}

export default GadgetCard;
