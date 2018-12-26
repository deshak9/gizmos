import {render} from 'react-dom';
import React from 'react';
import style from './search.bar.login.scss';
import PopupModal from '../../shared/modals/popup.modal.jsx';
import CookieGuy from '../../services/cookie.guy.jsx';
import GadgetsService from '../../services/gadgets.service.jsx';

class SearchBarLogin extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            isLoginModalOn: false,
            searchInput: '',
            searchResult: [],
            isSearching: false
        };

        let rwCookie = CookieGuy.getCookie('RWcookie');
        rwCookie != "" && (isUserLoggedIn = true);

        this.searchTimeOutId = 0;
    }

    componentDidMount() {
    }

    hideModal() {
        this.setState({isLoginModalOn: false});
    }

    showModal() {
        this.setState({isLoginModalOn: true});
    }

    doLogout() {
        UserService.doLogout()
            .then(res => {
                if (res.data['response'] == true) {
                    window.location.href = ''
                }
            });
    }

    handleSearchChange(e) {
        let oldVal = this.state.searchInput;
        this.setState({isSearching: true, searchInput: e.target.value.trim()}, function () {
            if (this.state.searchInput != oldVal || this.state.searchResult.length === 0) {
                clearTimeout(this.searchTimeOutId);
                this.searchTimeOutId = setTimeout(function () {
                    this._doSearch(this.state.searchInput);
                }.bind(this), 300);
            }
        }.bind(this));
    }

    _doSearch(searchInput) {
        GadgetsService.getSearchItems(searchInput)
            .then(res => {
                this.setState({searchResult: res.data})
            })
    }

    /*
     <div className="header-login-button">
     {deskTopLoginButton}
     </div>
     */

    disableIsSearching() {
        setTimeout(function () {
            this.setState({isSearching: false});
            clearTimeout(this.searchTimeOutId);
        }.bind(this), 200);
    }

    render() {

        var loginModal = this.state.isLoginModalOn ?
            <PopupModal hideModal={this.hideModal.bind(this)} modalType="login-signup"></PopupModal> : "";
        let deskTopLoginButton = isUserLoggedIn ?
            <div>
                Hi {userName}

                <div className="">
                    <ul>
                        <li onClick={this.doLogout.bind(this)}>Logout</li>
                    </ul>
                </div>
            </div>
            : <a onClick={this.showModal.bind(this)}>Login</a>;

        let showSearchResult = this.state.isSearching ? {
            display: 'block'
        } : {
            display: 'none'
        };
        return (

            <div className="hello">
                <div className="header-search-bar">
                    <input
                        onChange={this.handleSearchChange.bind(this)}
                        onFocus={this.handleSearchChange.bind(this)}
                        onBlur={this.disableIsSearching.bind(this)}
                        type="textbox" placeholder="What are you looking for"/>

                    <div style={showSearchResult} className="header-search-bar-result">
                        <ul>
                            {
                                this.state.searchResult.map(item =>
                                        <li key={item.NAME}><a
                                            href={"/"+item.TYPE.toLowerCase()+"/"+item.NAME.replace(/\s+/g, '-')}>{item.NAME}</a>
                                        </li>
                                )
                            }


                        </ul>
                    </div>
                    <a><img width="13" src="/images/search-icon1.png"/></a>
                </div>


                <div className="clear-both-side"></div>
                {loginModal}
            </div>
        );
    }
}

render(<SearchBarLogin/>, document.getElementById('search-bar-login'));
export default SearchBarLogin;
