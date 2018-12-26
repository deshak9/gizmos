import React from 'react';
import {render} from 'react-dom';
import GadgetTilesComponent from '../../gadgets/gadget.tiles.component.jsx';
import style from './cool.gadgets.category.module.scss';
import SideTrendingStoriesComponent  from '../../side-story/side.trending.stories.component.jsx';
import SideLatestReviewComponent  from '../../side-story/side.latest.review.component.jsx';
import AppFooter from '../../../shared/footer/app.footer.jsx';

class CoolGadgetsCategoryModule extends React.Component {
    constructor(props) {
        super(props);

        let catId = this.props.params.categoryId;
        this.catId = catId.trim().replace(/-/g, " ");
        console.log(this.catId);
    }

    componentDidMount() {

    }

    hideModal() {

    }

    render() {
        return (
            <div>
                <div className="page-width">
                    <div className="left-data-container">
                        <GadgetTilesComponent name={this.catId + " Gadgets"} loadMoreEnabled={true}
                                              type="CATEGORY_GADGET"
                                              categoryId={this.props.params.categoryId}></GadgetTilesComponent>
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

export default CoolGadgetsCategoryModule;