import React from 'react';
import style from './story.tile.scss';
import SocialButtonsGray from './../../shared/social/gray/social.buttons.gray.jsx';
import SocialShareService from '../../services/social.share.service.jsx';
class StoryTile extends React.Component {

    constructor(props) {
        super(props);

        this.state = {productUrl: ''};
    }

    componentDidMount() {
        let productName = this.props.name.trim();
        productName = productName.replace(/ /g, "-");
        this.setState({productUrl: `/${this.props.type.toLowerCase()}/${productName}`});
    }

    render() {
        var productImageStyle = {
            background: 'url(' + this.props.imageUrl + ') no-repeat 50% 50%', backgroundSize: 'cover'
        };
        return (
            <div className="story-tile">
                <a href={this.state.productUrl}>
                    <div style={productImageStyle} className="story-tile-image">
                    </div>
                </a>

                <div className="story-tile-description-data">
                    <div className="story-tile-name">
                        <a href={this.state.productUrl}>{this.props.name}</a>
                    </div>
                    <div className="story-tile-description">
                        {this.props.description}
                    </div>

                    <SocialButtonsGray {...this.props} productUrl={this.state.productUrl}></SocialButtonsGray>
                </div>
                <div className="clear-both-side"></div>
            </div>
        );
    }
}

export default StoryTile;
