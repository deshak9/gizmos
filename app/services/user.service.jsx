import React from 'react';
import axios from 'axios';
import BaseService from './base.serivce.jsx';

class UserService {
    constructor() {
    }

    newRegistration(userName, emailId, password) {
        return axios.post(`${BaseService.baseUrl}/user/create?_t=${RW_BCC_KEY}`, {
            userName: userName,
            emailId: emailId,
            password: password
        });
    }

    login(emailId, password) {
        return axios.post(`${BaseService.baseUrl}/login?_t=${RW_BCC_KEY}`, {
            emailId: emailId,
            password: password
        });
    }

    loginWithFacebook(fbEmailId, fbUserId, fbAccessToken) {
        let url = `${BaseService.baseUrl}/login/facebook`;
        let data = {
            fbEmailId: fbEmailId,
            fbUserId: fbUserId,
            fbAccessToken: fbAccessToken
        };
        return BaseService.postData(url, data);
    }

    resetPassword(emailId) {
        let url = `${BaseService.baseUrl}/user/reset`;
        let data = {
            emailId: emailId
        };
        return BaseService.postData(url, data);
    }

    newsletterSignup(emailId) {
        let url = `${BaseService.baseUrl}/user/submit/email`;
        let data = {
            emailId: emailId,
            country: visitorCountry
        };
        return BaseService.postData(url, data);
    }

    resetValidation(password, resetPasswordLink) {
        let url = `${BaseService.baseUrl}/user/reset/validation`;
        let data = {
            password: password,
            resetPasswordLink: resetPasswordLink
        };
        return BaseService.postData(url, data);
    }

    doLogout() {
        return axios.post(`${BaseService.baseUrl}/logout?_t=${RW_BCC_KEY}`, {});
    }
}

export default (new UserService());