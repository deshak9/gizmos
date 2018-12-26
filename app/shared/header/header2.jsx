import React from 'react';
import {render} from 'react-dom';
import axios from 'axios';
import bgStyles from './header2.css';
import Header from '../../shared/header/header.jsx';

class HeaderBackground extends React.Component {
    constructor(props) {
        super(props);

        this.state = {};
    }

    componentDidMount() {
    }

    openMobileMenuContent() {

    }

    render() {
        return (
            <div>
                <div className={"full-width " + bgStyles.headerBackgroundContainer}>
                    <Header backgroundColor="none"></Header>

                    <div className={bgStyles.bgTextContainer}>
                        <h1>COOL GADGETS</h1>
                        <h2>Why not make life simpler with these cool gadgets</h2>
                    </div>
                </div>

            </div>
        );

    }
}

export default HeaderBackground;