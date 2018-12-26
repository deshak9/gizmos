import React from 'react';
import GadgetCard from '../GadgetCard.jsx';
import axios from 'axios';
import AllGadgets from '../AllGadgets.jsx';
import GadgetsService from '../../services/gadgets.service.jsx';
import LoadingSpinner from '../../shared/LoadingSpinner.jsx';
import Header from '../../shared/header/header.jsx';
var gadgets = [];

class ShowTop10 extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            feeds: [],
            isPageLoading: true
        }
    }

    componentDidMount() {
        GadgetsService.getTop10Gadgets()
            .then(resp => {
                this.setState({feeds: resp.data, isPageLoading: false});
            });
    }

    render() {
        return (
            this.state.isPageLoading ?
                <LoadingSpinner myHeight={40} myWidth={40} isBlack={true}></LoadingSpinner>
                :
                <div>
                    <h2 className="hide-me">Top 10 gadgets to buy online</h2>
                    <Header backgroundColor="#ff5858"></Header>
                    <AllGadgets feeds={this.state.feeds}></AllGadgets>
                </div>
        );
    }

}

export default ShowTop10;
