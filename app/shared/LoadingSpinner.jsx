import React from 'react';

class LoadingSpinner extends React.Component {


    constructor(props) {
        super(props);

        this.state = {
            blackSpinnerUrl: '/images/spin-black.gif',
            whiteSpinnerUrl: '/images/spin-white.gif'
        };

    }

    componentDidMount() {
    }

    render() {
        var myFinalHeight = '' + this.props.myHeight + '';
        var myFinalWidth = '' + this.props.myWidth + '';
        return (
            <div className="loading-spinner">
                {
                    this.props.isBlack ?
                        <img width={myFinalWidth} height={myFinalHeight} src={this.state.blackSpinnerUrl} alt="Loading.."/> :
                        <img width={myFinalWidth} height={myFinalHeight} src={this.state.whiteSpinnerUrl} alt="Loading.."/>
                }

            </div>
        );
    }
}

export default LoadingSpinner;