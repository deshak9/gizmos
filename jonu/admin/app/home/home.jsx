import React from 'react';
import {render} from 'react-dom';
import axios from 'axios';
import {NavLink, Link} from 'react-router';
import {Route, Router, IndexRoute, hashHistory} from 'react-router';

class Home extends React.Component {
    render() {
        return (
            <div>
                <a className="btn btn-default" href="/jonu/admin/gizmos">Gizmos</a>
                <a className="btn btn-default" href="/jonu/admin/email">Email</a>

                <div className="content">
                    {this.props.children}
                </div>
            </div>
        );
    }
}

export default Home;