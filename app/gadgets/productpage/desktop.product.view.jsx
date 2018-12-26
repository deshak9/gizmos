import React from 'react';
import axios from 'axios';
import ImageSlider from '../../shared/slider/image.slider.jsx';
import ShareButtons from '../../shared/share-buttons/share.buttons.jsx';
import styles from './desktop.product.view.css';

class DesktopProductView extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className={styles.upperContent}>
                <div className={styles.upperContentLeft}>
                    <div className={styles.imagesContainer}>
                        {
                            this.props.loadImageSlider ?
                                <ImageSlider slidingImages={this.props.slidingImages}></ImageSlider>
                                : ''
                        }
                    </div>

                    <div className={styles.shareButtonContainer}>
                        <p>Tell your friends about this gadget</p>
                        <ShareButtons name={this.props.productDetails.NAME}
                                      description={this.props.productDetails.DESCRIPTION}
                                      currentPath={this.props.currentPath}
                                      imageUrl={this.props.slidingImages[0]}></ShareButtons>
                    </div>
                </div>
                <div className={styles.upperContentRight}>
                    <div className={styles.nameContainer}>
                        <h1> {this.props.productDetails.NAME} </h1>
                    </div>
                    <div className={styles.descriptionContainer}>
                        <p>{this.props.productDetails.DESCRIPTION}</p>
                    </div>
                    <div className={styles.buyButtonContainer}>
                        { this.props.productAvailability.map(ava =>
                                <a target="_blank" href={ava.STORE_URL}
                                   key={ava.STORE_NAME}
                                   className={ ava.STORE_NAME.toLowerCase()+"BuyButton"}>
                                    buy it on {ava.STORE_NAME}</a>
                        )}
                    </div>
                    <div className={styles.videoContainer}>
                        {this.props.productDetails.VIDEO_URL ?
                            <div>
                                <h2>WATCH VIDEO</h2>
                                <iframe className={styles.videoFrame}
                                        src={this.props.productDetails.VIDEO_URL}>
                                </iframe>
                            </div> : ''
                        }
                    </div>
                </div>
                <div className="clear-both-side"></div>
            </div>
        );
    }
}

export default DesktopProductView;