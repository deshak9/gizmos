import React from 'react';
import axios from 'axios';
import BaseService from './base.serivce.jsx';
class GadgetsService {

    constructor() {

    }

    getAllGadgets() {
        let url = `${BaseService.baseUrl}/gadgets`;
        return BaseService.getData(url);
    }

    getAllCategories() {
        let url = `${BaseService.baseUrl}/categories`;
        return BaseService.getData(url);
    }

    getAllProductNameAndId() {
        let url = `${BaseService.baseUrl}/product/names`;
        return BaseService.getData(url);
    }

    getTop10Gadgets() {
        let url = `${BaseService.baseUrl}/gadgets/top10`;
        return BaseService.getData(url);
    }

    getCategoryBasedData(category) {
        let url = `${BaseService.baseUrl}/gadgets/category/${category}`;
        return BaseService.getData(url);
    }

    saveLikeOnProduct(data) {
        let url = `${BaseService.baseUrl}/like-product`;
        return BaseService.postData(url, data);
    }

    submitNewGizmos(data) {
        let url = `${BaseService.baseUrl}/gizmo/submit`;
        return BaseService.postData(url, data);
    }

    updateGizmos(data) {
        let url = `${BaseService.baseUrl}/gizmo/update`;
        return BaseService.postData(url, data);
    }

    submitAvailability(data) {
        let url = `${BaseService.baseUrl}/availability/submit`;
        return BaseService.postData(url, data);
    }

    uploadImages(images) {
        let url = `${BaseService.baseUrl}/gizmo/images`;
        return BaseService.uploadImage(url, images);
    }

    getSearchItems(productName) {
        let url = `${BaseService.baseUrl}/stories/search`;
        let queryParams = {
            productName: productName
        };
        return BaseService.getDataWithQueryParams(url, queryParams);
    }

    getGadgetInfoByName(productName) {
        let url = `${BaseService.baseUrl}/product/info`;
        let queryParams = {
            productName: productName
        };
        return BaseService.getDataWithQueryParams(url, queryParams);
    }

}

export default (new GadgetsService());