import React from 'react';
import axios from 'axios';
import BaseService from './base.serivce.jsx';
class GadgetsService {

    constructor() {

    }

    getAllGadgets(offset, limit) {
        let url = `${BaseService.baseUrl}/latest-gadgets`;
        let params = {
            offset: offset,
            limit: limit
        };
        return BaseService.getDataWithQueryParams(url, params);
    }

    getAllCategories() {
        let url = `${BaseService.baseUrl}/categories`;
        return BaseService.getData(url);
    }

    getTop10Gadgets() {
        let url = `${BaseService.baseUrl}/gadgets/top10`;
        return BaseService.getData(url);
    }

    getTopGadgetsByView(limit) {
        let url = `${BaseService.baseUrl}/gadgets/gadgets-by-view`;
        let params = {
            limit: limit
        };
        return BaseService.getDataWithQueryParams(url, params);
    }

    getTopStoriesByView(limit) {
        let url = `${BaseService.baseUrl}/stories/stories-by-view`;
        let params = {
            limit: limit
        };
        return BaseService.getDataWithQueryParams(url, params);
    }

    getLatestStoriesByRange(offset, limit) {
        let url = `${BaseService.baseUrl}/stories/stories-by-range`;
        let params = {
            offset: offset,
            limit: limit
        };
        return BaseService.getDataWithQueryParams(url, params);
    }

    getLatestReview(limit) {
        let url = `${BaseService.baseUrl}/review/gadget-review`;
        let params = {
            limit: limit
        };
        return BaseService.getDataWithQueryParams(url, params);
    }

    getCategoryBasedData(categoryId, offset, limit) {
        let url = `${BaseService.baseUrl}/gadgets/category`;
        let params = {
            categoryId: categoryId,
            offset: offset,
            limit: limit
        };
        return BaseService.getDataWithQueryParams(url, params);
    }

    saveLikeOnProduct(data) {
        let url = `${BaseService.baseUrl}/like-product`;
        return BaseService.postData(url, data);
    }

    getGadgetInfo(productName) {
        let url = `${BaseService.baseUrl}/gadget/${productName}`;
        return BaseService.getData(url);
    }

    getSearchItems(productName) {
        let url = `${BaseService.baseUrl}/stories/search`;
        let queryParams = {
            productName: productName
        };
        return BaseService.getDataWithQueryParams(url, queryParams);
    }

}

export default (new GadgetsService());