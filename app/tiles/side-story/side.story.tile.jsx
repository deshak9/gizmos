import React from 'react';
import style from './side.story.tile.scss';
class SideStoryTile extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            productUrl: ''
        };
    }

    componentDidMount() {
        let productName = this.props.name.trim();
        productName = productName.replace(/ /g, "-");
        this.setState({productUrl: `/${this.props.type}/${productName}`});
    }

    render() {
        var productImageStyle = {
            background: 'url(' + this.props.imageUrl + ') no-repeat 50% 50%', backgroundSize: 'cover'
        };
        return (
            <div className="side-story-tile">
                <a href={this.state.productUrl}>
                    <div style={productImageStyle} className="side-story-tile-image">
                    </div>
                </a>

                <div className="side-story-tile-name">
                    <a href={this.state.productUrl}>{this.props.name}</a>
                </div>
                <div className="clear-both-side"></div>
            </div>
        );
    }
}

export default SideStoryTile;
