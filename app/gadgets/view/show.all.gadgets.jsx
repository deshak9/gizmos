import React from 'react';
import GadgetCard from '../GadgetCard.jsx';
import axios from 'axios';
import AllGadgets from '../AllGadgets.jsx';
import GadgetsService from '../../services/gadgets.service.jsx';
import LoadingSpinner from '../../shared/LoadingSpinner.jsx';
import HeaderBackground from '../../shared/header/header2.jsx';

var gadgets = [];

class ShoAllGadgets extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            feeds: [],
            isPageLoading: true
        }
    }

    componentDidMount() {
        GadgetsService.getAllGadgets()
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
                    <HeaderBackground></HeaderBackground>
                    <AllGadgets feeds={this.state.feeds}></AllGadgets>
                </div>
        );
    }
}

export default ShoAllGadgets;
