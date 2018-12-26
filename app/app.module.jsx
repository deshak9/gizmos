import React from 'react';
import {render} from 'react-dom';
import NewsLetterSignup from './shared/news-letter/news.letter.signup.jsx';
import AppFooter from './shared/footer/app.footer.jsx';

class AppModule extends React.Component {
    constructor(props) {
        super(props);
    }

    hideModal() {

    }

    render() {
        return (
            <div>
                <NewsLetterSignup></NewsLetterSignup>
                {this.props.children}
            </div>
        );
    }
}

export default AppModule;