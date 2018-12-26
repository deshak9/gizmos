import {render} from 'react-dom';
import React from 'react';
import style from './story.tiles.component.scss';
import StoryTile from '../../tiles/story/story.tile.jsx';
import GadgetService from '../../services/gadgets.service.jsx';

class StoryTileComponent extends React.Component {

    constructor(props) {
        super(props);

        this.offset = 0;
        this.state = {
            storyTiles: [],
            loadMoreText: "Load More"
        };
        this.canLoadMore = true;

    }

    componentDidMount() {
        this.loadData();
    }

    loadData() {
        if (!this.canLoadMore) {
            return;
        }

        this.setState({loadMoreText: "Loading.."});

        let limit = 10;
        GadgetService.getLatestStoriesByRange(this.offset, limit)
            .then(resp => {
                let data = resp.data;
                if (data.length > 0) {
                    let newData = this.state.storyTiles.concat(data);
                    this.setState({storyTiles: newData});
                    this.offset += limit;
                } else {
                    this.canLoadMore = false;
                }
                this.setState({loadMoreText: "Load More"});
            });
    }

    loadMoreStories(e) {
        e.preventDefault();
        this.loadData();
    }

    render() {
        return (
            <div className="story-tiles-component">
                <div className="story-tiles-component-heading">
                    <h2>Latest Stories</h2>
                </div>
                <div className="story-tiles-grid">
                    <ul>
                        {
                            this.state.storyTiles.map(story =>
                                    <li key={story.NAME}>
                                        <StoryTile
                                            imageUrl={story.IMAGE_URL}
                                            name={story.NAME}
                                            type={story.TYPE}
                                            description={story.DESCRIPTION}></StoryTile>
                                    </li>
                            )
                        }
                    </ul>
                </div>
                <div className="gadget-load-more-button">
                    <a onClick={this.loadMoreStories.bind(this)}>{this.state.loadMoreText}</a>
                </div>
            </div>
        );
    }
}

export default StoryTileComponent;
