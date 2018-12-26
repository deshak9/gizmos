import React from 'react';
import axios from 'axios';
import DesktopProductView from './desktop.product.view.jsx';
import MobileProductView from './mobile.product.view.jsx';
import ShowAllGadgets from '../../gadgets/view/show.all.gadgets.jsx';
import GadgetsService from '../../services/gadgets.service.jsx';
import Header from '../../shared/header/header.jsx';
import AllGadgets from '../AllGadgets.jsx';
import LoadingSpinner from '../../shared/LoadingSpinner.jsx';

class ProductDetailsPage extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            productDetails: {},
            productAvailability: {},
            slidingImages: [],
            loadImageSlider: false,
            isPageLoading: true,
            feeds: [],
            isAllGadgetLoading: true
        }
    }

    componentDidMount() {
        GadgetsService.getGadgetInfo(this.props.params.productName)
            .then(res => {
                this.processData(res.data);
            });

        GadgetsService.getAllGadgets()
            .then(resp => {
                this.setState({feeds: resp.data, isAllGadgetLoading: false});
            });
    }

    processData(data) {

        let productDetails = data.productDetails[0];
        let imageUrl = [];

        imageUrl.push(productDetails.IMAGE_1);
        imageUrl.push(productDetails.IMAGE_2);
        imageUrl.push(productDetails.IMAGE_3);
        imageUrl.push(productDetails.IMAGE_4);
        imageUrl.push(productDetails.IMAGE_5);

        let filteredImageUrl = imageUrl.filter(function (it) {
            if (it) {
                return it;
            }
        });

        this.setState({
            slidingImages: filteredImageUrl,
            productDetails: productDetails,
            productAvailability: data.productAvailability,
            loadImageSlider: true,
            isPageLoading: false
        });
    }

    render() {
        var result = _isDesktop ?
            <DesktopProductView
                currentPath={this.props.location.pathname}
                productId={this.props.params.productId}
                productDetails={this.state.productDetails}
                productAvailability={this.state.productAvailability}
                slidingImages={this.state.slidingImages}
                loadImageSlider={this.state.loadImageSlider}>
            </DesktopProductView>
            :
            <MobileProductView
                currentPath={this.props.location.pathname}
                productId={this.props.params.productId}
                productDetails={this.state.productDetails}
                productAvailability={this.state.productAvailability}
                slidingImages={this.state.slidingImages}
                loadImageSlider={this.state.loadImageSlider}>
            </MobileProductView>;
        return (
            <div className="full-width">
                <Header backgroundColor="#ff5858"></Header>

                <div className="page-width">
                    { this.state.isPageLoading ?
                        <LoadingSpinner myHeight={40} myWidth={40} isBlack={true}></LoadingSpinner> :
                        result
                    }
                </div>

                { this.state.isAllGadgetLoading ?
                    <LoadingSpinner myHeight={40} myWidth={40} isBlack={true}></LoadingSpinner> :
                    <AllGadgets feeds={this.state.feeds}></AllGadgets>
                }

            </div>
        );
    }
}

export default ProductDetailsPage;

