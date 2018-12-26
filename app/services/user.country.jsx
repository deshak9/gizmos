import React from 'react';
import axios from 'axios';
class UserCountry {
    constructor() {
        this.allowedCountry = ['IN', 'US', 'FR', 'GE'];
        this.state = {
            userCountry: 'US'
        }
    }

    componentDidMount() {
        let url = `http://api.wipmania.com/jsonp`;
        axios.get(url, sync)
            .then(res => {
                let country = res.address.country_code;
                if (Array.indexOf(this.allowedCountry, country) !== -1) {
                    this.setState({userCountry: country});
                    visitorCountry = country;
                }
            });
    }

    getCountry() {
        return this.state.userCountry;
    }

}

export default (new UserCountry());