import React from 'react';
import style from './gadget.tile.scss';
import SocialButtonsGray from './../../shared/social/gray/social.buttons.gray.jsx';
class GadgetTile extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            productUrl: ''
        };
    }

    componentDidMount() {
        let productName = this.props.name.trim();
        productName = productName.replace(/ /g, "-");
        this.setState({productUrl: `/gadgets/${productName}`});
    }

    render() {
        var productImageStyle = {
            background: 'url(' + this.props.imageUrl + ') no-repeat 50% 50%', backgroundSize: 'cover'
        };
        return (
            <div className="gadget-tile">
                <a href={this.state.productUrl}>
                    <div style={productImageStyle} className="gadget-tile-image">
                    </div>
                </a>

                <div className="gadget-tile-description-data">
                    <div className="gadget-tile-name">
                        <a href={this.state.productUrl}>{this.props.name}</a>
                    </div>
                    <div className="gadget-tile-description">
                        {this.props.description}
                    </div>

                    <SocialButtonsGray {...this.props} productUrl={this.state.productUrl}></SocialButtonsGray>

                </div>
            </div>
        );
    }
}

export default GadgetTile;
