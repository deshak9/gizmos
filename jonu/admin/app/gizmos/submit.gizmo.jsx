import React from 'react';
import {render} from 'react-dom';
import axios from 'axios';
import GadgetsService from '../services/gadgets.service.jsx';
import FileUploader from '../shared/uploader/file.uploader.jsx';


class SubmitGizmo extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            allCategories: [],
            enableContent: false,
            name: '',
            description: '',
            type: '',
            categories: '',
            images: [],
            countries: 'IN,US',
            videoUrl: '',
            blogContent: '',
            status: '',
            productId: ''
        };
    }

    componentDidMount() {
        GadgetsService.getAllCategories()
            .then(resp => {
                this.setState({allCategories: resp.data});
            });

        if (this.props.isEdit) {
            this.populateEditGadgetInfo(this.props.productInfo);
        }
    }

    populateEditGadgetInfo(productInfo) {
        this.setState({
            name: productInfo.NAME,
            description: productInfo.DESCRIPTION,
            type: productInfo.TYPE,
            categories: productInfo.CATEGORY,
            countries: productInfo.COUNTRY,
            videoUrl: productInfo.VIDEO_URL ? productInfo.VIDEO_URL : "",
            blogContent: productInfo.BLOG_CONTENT,
            productId: productInfo.PRODUCT_ID
        });
    }

    onFileDrop(acceptedFiles, rejectedFiles) {
        acceptedFiles.forEach(function (entry) {
            this.state.images.push(entry);
        }, this);

        this.setState({images: this.state.images});

    }

    resetImageSelection() {
        this.setState({images: []})
    }

    handleNameChange(e) {
        this.setState({name: e.target.value});
    }

    handleDescriptionChange(e) {
        this.setState({description: e.target.value});
    }

    handleCategoryChange(e) {
        if (this.state.categories == '')
            this.setState({categories: e.target.value});
        else if (this.state.categories.indexOf(e.target.value) == -1) {
            this.setState({categories: this.state.categories + "," + e.target.value});
        }
    }

    handleTypeChange(e) {
        this.setState({type: e.target.value});
    }

    handleManualCategoryChange(e) {
        this.setState({categories: e.target.value});
    }

    handleCountryChange(e) {
        this.setState({countries: e.target.value});
    }

    handleImageUrlChange(e) {
        this.setState({images: e.target.value});
    }

    handleVideoUrlChange(e) {
        this.setState({videoUrl: e.target.value});
    }

    handleBlogContentChange(e) {
        this.setState({blogContent: e.target.value});
    }

    enableContent() {
        this.setState({enableContent: !this.state.enableContent});
    }

    submitGizmo(e) {
        e.preventDefault();

        if (this.props.isEdit) {
            this._updateGizmo();
            return;
        }

        if (this.state.name == '' ||
            this.state.description == '' ||
            this.state.categories == '' ||
            this.state.countries == '') {
            return;
        }

        this._submitGizmo();
    }

    _updateGizmo() {
        let imageName = this.state.images[0] ? this.state.images[0].name : null;
        let image_1 = this.state.images[1] ? this.state.images[1].name : null;
        let image_2 = this.state.images[2] ? this.state.images[2].name : null;
        let image_3 = this.state.images[3] ? this.state.images[3].name : null;
        let image_4 = this.state.images[4] ? this.state.images[4].name : null;
        let data = {
            name: this.state.name,
            productId: this.state.productId,
            description: this.state.description,
            type: this.state.type,
            categories: this.state.categories,
            countries: this.state.countries,
            videoUrl: this.state.videoUrl,
            imageName: imageName,
            image_1: image_1,
            image_2: image_2,
            image_3: image_3,
            image_4: image_4,
            blogContent: this.state.blogContent.toString()
        };

        GadgetsService.updateGizmos(data)
            .then(res => {
                if (res.data['response'] == true) {
                    this.setState({status: 'Updated Gizmo'});
                    GadgetsService.uploadImages(this.state.images)
                        .then(res2 => {
                            if (res2.data.response == true) {
                                this.setState({status: 'Updated Gizmo, and uploaded images'});
                            } else {
                                this.setState({status: 'Updated Gizmo, but faild to upload images'});
                            }
                        });
                } else {
                    this.setState({status: 'Something went wrong while Updating Gizmo'});
                }
            }, this);
    }

    _submitGizmo() {

        let imageName = this.state.images[0].name;
        let image_1 = this.state.images[1] ? this.state.images[1].name : null;
        let image_2 = this.state.images[2] ? this.state.images[2].name : null;
        let image_3 = this.state.images[3] ? this.state.images[3].name : null;
        let image_4 = this.state.images[4] ? this.state.images[4].name : null;
        let data = {
            name: this.state.name,
            description: this.state.description,
            type: this.state.type,
            categories: this.state.categories,
            countries: this.state.countries,
            videoUrl: this.state.videoUrl,
            imageName: imageName,
            image_1: image_1,
            image_2: image_2,
            image_3: image_3,
            image_4: image_4,
            blogContent: this.state.blogContent.toString()
        };

        GadgetsService.submitNewGizmos(data)
            .then(res => {
                if (res.data['response'] == true) {
                    this.setState({status: 'Submitted Gizmo'});
                    GadgetsService.uploadImages(this.state.images)
                        .then(res2 => {
                            if (res2.data.response == true) {
                                this.setState({status: 'Submitted Gizmo, and uploaded images'});
                            } else {
                                this.setState({status: 'Submitted Gizmo, but faild to upload images'});
                            }
                        });
                } else {
                    this.setState({status: 'Something went wrong while submitting Gizmo'});
                }
            }, this);
    }

    render() {
        return (
            <div>
                {
                    !this.props.isEdit ?
                        <div className="contentHeading"><a onClick={this.enableContent.bind(this)}>Submit new gizmo</a>
                        </div>
                        : ""
                }
                { this.state.enableContent || this.props.isEdit ?
                    <form onSubmit={this.submitGizmo.bind(this)}>
                        <div className="form-group">
                            <label htmlFor="exampleInputEmail1">Name</label>
                            <input type="textbox" className="form-control" id="exampleInputEmail1"
                                   onChange={this.handleNameChange.bind(this)}
                                   placeholder="Name"
                                   value={this.state.name}/>
                        </div>

                        <div className="form-group">
                            <label>Description</label>
                            <input type="textbox" className="form-control" id="exampleInputEmail1"
                                   onChange={this.handleDescriptionChange.bind(this)}
                                   placeholder="Description"
                                   value={this.state.description}/>
                        </div>

                        <div className="form-group">
                            <label htmlFor="exampleInputEmail1">Type</label>
                            <select className="form-control"
                                    onChange={this.handleTypeChange.bind(this)}
                                    value={this.state.type}>

                                <option>Select type</option>
                                <option>GADGETS</option>
                                <option>STORIES</option>
                                <option>REVIEWS</option>
                            </select>

                        </div>

                        <div className="form-group">
                            <label>Country (IN,US,FR,GE)</label>
                            <input type="textbox" className="form-control" id="exampleInputEmail1"
                                   onChange={this.handleCountryChange.bind(this)}
                                   placeholder="Country"
                                   value={this.state.countries}/>
                        </div>

                        <div className="form-group">
                            <label htmlFor="exampleInputEmail1">Category</label>
                            <input type="textbox" className="form-control" id="exampleInputEmail1"
                                   placeholder="Category" onChange={this.handleManualCategoryChange.bind(this)}
                                   value={this.state.categories}/>
                            <select className="form-control"
                                    size="8"
                                    onChange={this.handleCategoryChange.bind(this)}>
                                {
                                    this.state.allCategories.map(category =>
                                            <option key={category}>{category}</option>
                                    )}
                            </select>

                        </div>

                        <div>
                            {
                                this.state.images.map(image =>
                                        <div key={image['name']}>
                                            <label >/product_img/gadgets/{image['name']}</label>
                                            <br/>
                                        </div>
                                )
                            }
                        </div>

                        <div className="form-group">
                            <label htmlFor="exampleInputEmail1">All Images</label>
                            <FileUploader onFileDrop={this.onFileDrop.bind(this)}></FileUploader>
                        </div>

                        <div className="form-group">
                            <a className="form-group" onClick={this.resetImageSelection.bind(this)}>Reset Images</a>
                        </div>

                        <div className="form-group">
                            <label>Video URL</label>
                            <input type="textbox" className="form-control"
                                   onChange={this.handleVideoUrlChange.bind(this)}
                                   value={this.state.videoUrl}/>
                        </div>

                        <div className="form-group">
                            <label>Blog content</label>
                            <textarea rows="20" cols="50" type="textarea" className="form-control"
                                      onChange={this.handleBlogContentChange.bind(this)}
                                      value={this.state.blogContent}>
                                </textarea>
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

export default SubmitGizmo;