import React from 'react';
import {render} from 'react-dom';
import axios from 'axios';
import AllGadgets from '../AllGadgets.jsx';
import GadgetsService from '../../services/gadgets.service.jsx';
import LoadingSpinner from '../../shared/LoadingSpinner.jsx';
import Header from '../../shared/header/header.jsx';

class ShowCategoryWise extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            feeds: [],
            isPageLoading: true
        }
    }

    componentDidMount() {
        GadgetsService.getCategoryBasedData(this.props.params.categoryId)
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
                    <Header backgroundColor="#ff5858"></Header>
                    <AllGadgets feeds={this.state.feeds}></AllGadgets>
                </div>
        );
    }
}

export default ShowCategoryWise;