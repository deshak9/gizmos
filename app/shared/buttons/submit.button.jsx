import React from 'react';
import {render} from 'react-dom';
import styles from './submit.button.css';

class SubmitButton extends React.Component {
    constructor(props) {
        super(props);

        this.inProgressBtn = {
            background: 'url(/images/spin-alt.gif) no-repeat 50% 50%',
            backgroundSize: '2vw',
            backgroundColor: this.props.buttonColor
        };

        this.defaultCss = {
            background: this.props.buttonColor
        };

        this.state = {};
    }


    handleClick(e) {
        e.preventDefault();
        this.props.onButtonClick(e);
    }


    render() {
        let buttonBackground = this.props.buttonState == 'inProgress' ?
            this.inProgressBtn : this.defaultCss;
        let isButtonDisabled = this.props.buttonState == 'inProgress';
        let buttonValue = this.props.buttonState == 'inProgress' ? '' : this.props.buttonValue;
        return (
            <input type="submit"
                   className={styles.buttonSize}
                   style={buttonBackground}
                   disabled={isButtonDisabled}
                   onClick={this.handleClick.bind(this)}
                   className="loginButton loginButtonSize"
                   value={buttonValue}/>
        );

    }

    mergeObjects(obj1, obj2) {
        let obj3 = {};
        for (let attrname in obj1) {
            obj3[attrname] = obj1[attrname];
        }
        for (let attrname in obj2) {
            obj3[attrname] = obj2[attrname];
        }
        return obj3;
    }
}

export default SubmitButton;