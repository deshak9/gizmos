import React from 'react';
import {render} from 'react-dom';
import axios from 'axios';
import styles from './header.css';

class HeaderCategories extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
    }

    render() {
        return (
            <div>
                <div className={styles.categoriesContent}>
                    <ul>
                        {this.props.allCategories.map(category =>
                                <li key={category}><a
                                    href={"/category/"+category.replace(/\s+/g, '-')}>{category}</a></li>
                        )}
                    </ul>
                </div>

                <img className="hide-me" src="/images/upper_arrow.png" alt="upper arrow"/>
            </div>
        );
    }
}

export default HeaderCategories;