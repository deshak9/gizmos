import React from 'react';
import {render} from 'react-dom';
import axios from 'axios';
import styles from './header.css';

class MobileHeaderCategories extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
    }

    render() {
        return (
            <div>
                <ul>
                    {this.props.allCategories.map(category =>
                            <li key={category}><a
                                href={"/category/"+category.replace(/\s+/g, '-')}> &nbsp;&nbsp;&nbsp;&nbsp;{category}</a></li>
                    )}
                </ul>
            </div>
        );
    }
}

export default MobileHeaderCategories;