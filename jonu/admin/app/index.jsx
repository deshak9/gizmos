import React from 'react';
import {render} from 'react-dom';
import Home from './home/home.jsx';
import Gizmos from './gizmos/gizmos.component.jsx';
import Email from './email/email.component.jsx';
import {Route, Router, IndexRoute, browserHistory} from 'react-router';

class App extends React.Component {
    render() {
        return (
            <Router history={browserHistory}>
                <Route path="jonu/admin" component={Home}>
                    <Route path="gizmos" component={Gizmos}/>
                    <Route path="email" component={Email}/>
                </Route>
            </Router>

        );
    }
}

render(<App/>, document.getElementById('app'));