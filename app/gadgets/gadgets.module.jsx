import React from 'react';
import {render} from 'react-dom';
import StoryTileComponent from '../home/story/story.tiles.component.jsx';

class GadgetsModule extends React.Component {
    constructor(props) {
        super(props);
    }

    hideModal() {

    }

    render() {
        return (
            <div>
                <StoryTileComponent></StoryTileComponent>
            </div>
        );
    }
}

export default GadgetsModule;