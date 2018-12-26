import {render} from 'react-dom';
import React from 'react';
import style from './side.stories.component.scss';
import SideStoryTile from '../../tiles/side-story/side.story.tile.jsx';
import GadgetService from '../../services/gadgets.service.jsx';

class SideLatestReviewComponent extends React.Component {

    constructor(props) {
        super(props);

        this.state = {trendingStories: []};
    }

    componentDidMount() {
        GadgetService.getLatestReview(10)
            .then(resp => {
                this.setState({trendingStories: resp.data});
            });
    }

    render() {
        return (
            <div className="side-story-tiles-component">
                <div className="side-story-heading">{this.props.name ? this.props.name : "Latest review"}</div>
                <div className="side-story-tiles-content">

                    {
                        this.state.trendingStories.map(story =>
                                <SideStoryTile
                                    key={story.NAME}
                                    name={story.NAME}
                                    type="reviews"
                                    imageUrl={story.IMAGE_URL}
                                    description={story.DESCRIPTION}></SideStoryTile>
                        )
                    }

                </div>
            </div>
        );
    }
}

if (sideLatestReviewComponentView) {
    render(<SideLatestReviewComponent/>, document.getElementById('side-latest-review-component'));
}
export default SideLatestReviewComponent;
