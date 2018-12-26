import React from 'react';
import {render} from 'react-dom';
import ReactDOMServer from 'react-dom/server';
import axios from 'axios';
import LoadingSpinner from './shared/LoadingSpinner.jsx';
import {Route, Redirect, Router, IndexRoute, browserHistory} from 'react-router';
import ShowAllGadgets from './gadgets/view/show.all.gadgets.jsx'
import GadgetsModule from './gadgets/gadgets.module.jsx';
import ResetPassword from './shared/view/reset/reset.password.jsx';
import TermsAndConditions from './shared/terms/terms.and.conditions.jsx';
import HomePageModule from './home/home.page.module.jsx';
import CoolGadgetsModule from './home/cool-gadgets/cool.gadgets.module.jsx';
import AppModule from './app.module.jsx';

import SearchBarLogin from './shared/header/search.bar.login.jsx';
import SideLatestReviewComponent from './home/side-story/side.latest.review.component.jsx';
import SocialButtonsColor from './shared/social/color/social.buttons.color.jsx';

import CoolGadgetsCategoryModule from './home/cool-gadgets/category/cool.gadgets.category.module.jsx';


class App extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            user: {},
            isPageLoading: true
        };
    }

    componentDidMount() {
        axios.get(`/api/user`)
            .then(res => {
                const user = res.data;
                RW_BCC_KEY = user['RW-BCC-KEY'];
                UID = user['UID'];
                isUserLoggedIn = user['RW-IS-LOGGED-IN'];
                userName = user['RW-USERNAME'];
                this.setState({isPageLoading: false, user});
            });
    }

    render() {

        if (!this.state.isPageLoading) {
            return (
                <Router history={browserHistory}>
                    <Route path="/" component={AppModule}>
                        <IndexRoute component={HomePageModule}/>

                        <Route path="gadgets/:name" component={GadgetsModule}/>
                        <Route path="stories/:name" component={GadgetsModule}/>
                        <Route path="reviews/:name" component={GadgetsModule}/>

                        <Route path="cool-gadgets" component={CoolGadgetsModule}/>
                        <Route path="cool-gadgets/categories/:categoryId" component={CoolGadgetsCategoryModule}/>

                        <Route path="privacypolicy" component={TermsAndConditions}/>
                        <Route path="user/reset" component={ResetPassword}/>
                        <Redirect from='*' to='/'/>
                    </Route>
                </Router>
            );
        } else {
            return (
                <div>
                    <LoadingSpinner myHeight={40} myWidth={40} isBlack={true}></LoadingSpinner>
                </div>
            );
        }

    }
}

render(<App/>, document.getElementById('app'));