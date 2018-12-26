import React from 'react';
import {render} from 'react-dom';
import {Link} from 'react-router';
import axios from 'axios';
import LoadingSpinner from '../LoadingSpinner.jsx';
import styles from './header.css';
import UserService from '../../services/user.service.jsx';
import PopupModal from '../modals/popup.modal.jsx';
import HeaderCategories from './categories.component.jsx';
import MobileHeaderCategories from './mobile.categories.component.jsx';
import GadgetsService from '../../services/gadgets.service.jsx';

class Header extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            user: {},
            isLoginModalOn: false,
            mobileMenuContentCss: 'display-none',
            allCategories: []
        };

        this.obj = {
            name: 'prabhat',
            age: 20,
            fnc: function () {
                this.lovely = "helldfl";
            }
        };
    }

    componentDidMount() {
        GadgetsService.getAllCategories()
            .then(resp => {
                this.setState({allCategories: resp.data});
            });
    }

    hideModal() {
        this.setState({isLoginModalOn: false});
    }

    showModal() {
        this.setState({isLoginModalOn: true});
    }

    openMobileMenuContent() {
        this.setState({mobileMenuContentCss: this.state.mobileMenuContentCss == 'display-none' ? 'display-block' : 'display-none'});
    }

    doLogout() {
        UserService.doLogout()
            .then(res => {
                if (res.data['response'] == true) {
                    window.location.href = ''
                }
            });
    }


    render() {

        let deskTopLoginButton = isUserLoggedIn ?
            <div>
                <a>Hi {userName} </a>

                <div className={styles.desktopLoginMenuContainer}>
                    <ul>
                        <li onClick={this.doLogout.bind(this)}>Logout</li>
                    </ul>
                </div>
            </div>
            : <a onClick={this.showModal.bind(this)}>LOGIN</a>;
        let mobileMenu = !isUserLoggedIn ?
            <ul>
                <li onClick={this.showModal.bind(this)}><a>Login</a></li>
                <li><a href="/top10">Top 10</a></li>
                <li className={styles.categoryButton}><a>Categories<img src='/images/downarrow.png'
                                                                        alt='down arrow'/></a></li>
                <div>
                    <MobileHeaderCategories allCategories={this.state.allCategories}></MobileHeaderCategories>
                </div>
            </ul>
            :
            <ul>
                <li><a href="/top10">Top 10</a></li>
                <li className={styles.categoryButton}><a>Categories<img width="10" src='/images/downarrow.png'
                                                                        alt='down arrow'/></a>
                </li>
                <div >
                    <MobileHeaderCategories allCategories={this.state.allCategories}></MobileHeaderCategories>
                </div>
                <li onClick={this.doLogout.bind(this)}><a>Logout</a></li>
            </ul>;

        var loginModal = this.state.isLoginModalOn ?
            <PopupModal hideModal={this.hideModal.bind(this)} modalType="login-signup"></PopupModal> : "";

        let backGroundColor = {
            background: this.props.backgroundColor
        };
        return (
            <div>
                <div className={"full-width " + styles.headerContainer+ " "+ styles.headerContainerSize}
                     style={backGroundColor}>
                    <div className="page-width">
                        <div className={styles.logoContainer+" "+styles.logoContainerSize}>
                            <a href="/">Gadget</a><a href="/">Clues</a>
                        </div>
                        <div className={styles.headerMenuItems}>
                            <a className={styles.categoryButton}>Categories
                                <div className={styles.categoriesContainer}>
                                    <HeaderCategories allCategories={this.state.allCategories}></HeaderCategories>
                                </div>
                            </a>
                            <a href="/top10">Top 10</a>
                        </div>
                        <div className={styles.loginContainer+ " text-truncate"}>
                            {deskTopLoginButton}

                            <img onClick={this.openMobileMenuContent.bind(this)} src="/img/cd-icon-menu.svg"
                                 alt='menu icon'/>

                            <div className={styles.mobileMenuContainer + " " + this.state.mobileMenuContentCss}>
                                <div className={styles.mobileMenuContent+ " page-width"}>
                                    {mobileMenu}
                                </div>
                            </div>
                        </div>
                    </div>
                    {loginModal}
                </div>

            </div>
        );

    }
}

export default Header;