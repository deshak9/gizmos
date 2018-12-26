import React from 'react';
import GadgetCard from './GadgetCard.jsx';
import axios from 'axios';
import LoadingSpinner from '../shared/LoadingSpinner.jsx';
import BaseService from '../services/gadgets.service.jsx';

var gadgets = [];

class AllGadgets extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            gadgets: []
        };
    }

    componentDidMount() {
        this.setState({gadgets: this.props.feeds});
    }

    render() {
        return (
            <div className="full-width">
                <div className="page-width">
                    <div>
                        <div className="gadgets-container masonry gadgets-column-size">
                            <ul className="gadget-card-grid">
                                {this.state.gadgets.map(gadget =>
                                        <li key={gadget.id}
                                            className="gadget-card-box gadget-card-box-size">

                                            <GadgetCard name={gadget.NAME}
                                                        imageUrl={gadget.IMAGE_URL}
                                                        isLiked={gadget.IS_LIKED}
                                                        likes={gadget.LIKES}
                                                        productId={gadget.PRODUCT_ID}
                                                        description={gadget.DESCRIPTION}
                                                {...this.props}></GadgetCard>
                                        </li>
                                )}
                            </ul>
                        </div>
                    </div>
                    <div className="clear-both-side"></div>

                </div>
            </div>
        );
    }

}

export default AllGadgets;
