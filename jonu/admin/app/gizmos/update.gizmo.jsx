import React from 'react';
import {render} from 'react-dom';
import axios from 'axios';
import GadgetsService from '../services/gadgets.service.jsx';
//import OriginalGadgetsService from '../../../../app/services/gadgets.service.jsx';
import SubmitGizmo from './submit.gizmo.jsx';


class UpdateGizmo extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            enableContent: false,
            searchResult: [],
            searchInput: '',
            productInfo: {},
            didGetProductInfo: false
        }
    }

    componentDidMount() {
    }

    enableContent() {
        this.setState({enableContent: !this.state.enableContent});
    }

    getProductInfo(productName) {

        GadgetsService.getGadgetInfoByName(productName)
            .then(res => {
                this.setState({productInfo: res.data, didGetProductInfo: true})
            })
    }

    handleSearchChange(e) {
        let oldVal = this.state.searchInput;
        this.setState({isSearching: true, searchInput: e.target.value.trim()}, function () {
            if (this.state.searchInput != oldVal || this.state.searchResult.length === 0) {
                clearTimeout(this.searchTimeOutId);
                this.searchTimeOutId = setTimeout(function () {
                    this._doSearch(this.state.searchInput);
                }.bind(this), 300);
            }
        }.bind(this));
    }

    _doSearch(searchInput) {
        GadgetsService.getSearchItems(searchInput)
            .then(res => {
                this.setState({searchResult: res.data})
            })
    }

    render() {

        let submitGizmoData = this.state.didGetProductInfo ?
            <SubmitGizmo isEdit={true} productInfo={this.state.productInfo}></SubmitGizmo> : "";
        return (
            <div>
                <div className="contentHeading"><a onClick={this.enableContent.bind(this)}>Update gizmo</a></div>
                { this.state.enableContent ?
                    <div>
                        <input
                            onChange={this.handleSearchChange.bind(this)}
                            onFocus={this.handleSearchChange.bind(this)}
                            type="textbox" placeholder="What are you looking for"/>

                        <div className="header-search-bar-result">
                            <ul>
                                {
                                    this.state.searchResult.map(item =>
                                            <li key={item.NAME}><a
                                                onClick={this.getProductInfo.bind(this, item.NAME)}>{item.NAME}</a>
                                            </li>
                                    )
                                }
                            </ul>
                        </div>
                        {submitGizmoData}

                    </div>
                    : ""
                }
            </div>
        );
    }
}

export default UpdateGizmo;