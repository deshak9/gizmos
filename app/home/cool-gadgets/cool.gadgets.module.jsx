import React from 'react';
import {render} from 'react-dom';
import GadgetTilesComponent from '../gadgets/gadget.tiles.component.jsx';
import style from './cool.gadgets.module.scss';
import SideTrendingStoriesComponent  from '../side-story/side.trending.stories.component.jsx';
import SideLatestReviewComponent  from '../side-story/side.latest.review.component.jsx';
import AppFooter from '../../shared/footer/app.footer.jsx';

class CoolGadgetsModule extends React.Component {
    constructor(props) {
        super(props);
    }

    hideModal() {

    }

    render() {
        return (
            <div>
                <div className="page-width">
                    <div className="left-data-container">
                        <GadgetTilesComponent name="Cool Gadgets" loadMoreEnabled={true}
                                              type="ALL_GADGET"></GadgetTilesComponent>
                    </div>
                    <div className="right-data-container">
                        <SideTrendingStoriesComponent
                            name="Trending stories"></SideTrendingStoriesComponent >
                        <SideLatestReviewComponent
                            name="Latest review"></SideLatestReviewComponent>
                    </div>
                    <div className="clear-both-side"></div>
                </div>
                <AppFooter></AppFooter>
            </div>
        );
    }
}

export default CoolGadgetsModule;