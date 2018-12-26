import axios from 'axios';
class BaseService {
    constructor() {
        this.baseUrl = "/jonu/admin/api";
    }

    getQueryParam() {
        return ``;
    }

    getData(url) {
        return axios.get(`${url}?${this.getQueryParam()}`);
    }

    postData(url, data) {
        return axios.post(`${url}?${this.getQueryParam()}`, data);
    }

    uploadImage(url, images) {

        var fd = new FormData();
        let fileCount = 1;
        images.forEach(function (image) {
            fd.append('file' + fileCount++, image);
        });
        return this.postData(url, fd);
    }

    getDataWithQueryParams(url, queryParams) {
        let params = this.getParams(queryParams);
        return axios.get(`${url}?${this.getQueryParam()}&${params}`);
    }

    getParams(params) {
        let str = "";
        for (let key in params) {
            if (str == "") {
                str = `${key}=${params[key]}`;
            } else {
                str = `${str}&${key}=${params[key]}`;
            }
        }
        return str.length > 1 ? str : '';
    }
}

export default (new BaseService());