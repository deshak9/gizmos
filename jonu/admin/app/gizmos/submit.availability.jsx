import React from 'react';
import {render} from 'react-dom';
import axios from 'axios';
import GadgetsService from '../services/gadgets.service.jsx';
import FileUploader from '../shared/uploader/file.uploader.jsx';


class SubmitAvailability extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            allProduct: [],
            enableContent: false,
            productId: '',
            productName: '',
            storeName: '',
            storeUrl: '',
            country: '',
            status: ''
        }
    }

    componentDidMount() {
        GadgetsService.getAllProductNameAndId()
            .then(resp => {
                this.setState({allProduct: resp.data});
            });
    }


    handleStoreNameChange(e) {
        this.setState({storeName: e.target.value});
    }

    handleStoreUrlChange(e) {
        this.setState({storeUrl: e.target.value});
    }

    handleProductChange(e) {
        let productName = e.target.value;
        let productId = '';
        this.state.allProduct.forEach(function (obj) {
            if (obj.NAME == productName) {
                productId = obj.PRODUCT_ID;
            }
        }, this);
        this.setState({productName: productName, productId: productId});
    }

    handleCountryChange(e) {
        this.setState({country: e.target.value});
    }


    enableContent() {
        this.setState({enableContent: !this.state.enableContent});
    }

    submitAvailability(e) {
        e.preventDefault();
        if (this.state.productId == '' ||
            this.state.storeName == '' ||
            this.state.storeUrl == '' ||
            this.state.country == '') {
            return;
        }
        this._submitAvailability()
    }

    _submitAvailability() {


        let data = {
            productId: this.state.productId,
            storeName: this.state.storeName,
            storeUrl: this.state.storeUrl,
            country: this.state.country
        };

        GadgetsService.submitAvailability(data)
            .then(res => {
                if (res.data.response == true) {
                    this.setState({status: 'Submitted availability'});
                } else {
                    this.setState({status: 'Something went wrong'});
                }
            });

        console.log(data);
    }

    render() {
        let css = {
            marginTop: '40px'
        };
        return (
            <div style={css}>
                <div className="contentHeading"><a onClick={this.enableContent.bind(this)}>Submit availability</a></div>
                { this.state.enableContent ?
                    <form onSubmit={this.submitAvailability.bind(this)}>

                        <div className="form-group">
                            <label htmlFor="exampleInputEmail1">Select the product</label>
                            <select className="form-control"
                                    onChange={this.handleProductChange.bind(this)}>
                                <option key='Select the product'>Select the product</option>
                                {
                                    this.state.allProduct.map(product =>
                                            <option key={product.NAME}>{product.NAME}</option>
                                    )}
                            </select>

                        </div>

                        <div className="form-group">
                            <label>Store Name</label>
                            <input type="textbox" className="form-control" id="exampleInputEmail1"
                                   onChange={this.handleStoreNameChange.bind(this)}
                                   placeholder="Store Name"/>
                        </div>

                        <div className="form-group">
                            <label>Store URL</label>
                            <input type="textbox" className="form-control" id="exampleInputEmail1"
                                   onChange={this.handleStoreUrlChange.bind(this)}
                                   placeholder="Store URL"/>
                        </div>

                        <div className="form-group">
                            <label>Country (IN,US,FR,GE)</label>
                            <input type="textbox" className="form-control" id="exampleInputEmail1"
                                   onChange={this.handleCountryChange.bind(this)}
                                   placeholder="Country"/>
                        </div>

                        <button type="submit" className="btn btn-default">Submit</button>

                        <label>{this.state.status}</label>
                    </form>
                    : ""
                }
            </div>
        );
    }
}

export default SubmitAvailability;