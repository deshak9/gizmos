import React from 'react';
import axios from 'axios';
import styles from './image.slider.css';
class ImageSlider extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            slidingImages: [],
            imageUrl: this.props.slidingImages[0]
        };

    }

    componentDidMount() {
    }

    setImageBackground(imageUrl) {
        this.setState({imageUrl: imageUrl});
    }

    render() {
        let backgroundCss = {
            background: 'url(' + this.state.imageUrl + ') 50% 50% / cover no-repeat', backgroundSize: 'cover'
        };
        return (

            <div className={styles.sliderContainer}>
                <div style={backgroundCss}
                     className={styles.imageShown + " hide-in-mobile"}>
                </div>
                <div className={styles.leftMenuContainer}>
                    {this.props.slidingImages.map(image =>
                            <div key={Math.random()}
                                 className={styles.leftMenuImage}
                                 onClick={this.setImageBackground.bind(this, image)}
                                 style={{background: 'url(' + image + ') no-repeat 50% 50%', backgroundSize: 'cover'}}>
                            </div>
                    )}
                    <div className="clear-both-size"></div>
                </div>

                <div style={backgroundCss}
                     className={styles.imageShown + " hide-in-desktop"}>
                </div>
            </div>
        );
    }
}

export default ImageSlider;