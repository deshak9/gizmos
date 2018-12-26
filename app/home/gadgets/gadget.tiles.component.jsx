import React from 'react';
import style from './gadget.tiles.component.scss';
import GadgetTile from '../../tiles/gadgets/gadget.tile.jsx';
import GadgetService from '../../services/gadgets.service.jsx';

class SideStoryTile extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            gadgetTiles: [],
            loadMoreText: "Load More"
        };
        this.offset = 0;
        this.limit = 15;
        this.canLoadMore = true;
    }

    componentDidMount() {
        this.loadMore();
    }

    loadMore() {
        if (!this.canLoadMore) {
            return;
        }

        this.setState({loadMoreText: "Loading.."});
        switch (this.props.type) {
            case "HOME":
                this.loadGadgetOnHomePage();
                break;
            case "ALL_GADGET":
                this.loadGadgetOnAllGadgetsPage();
                break;
            case "CATEGORY_GADGET":
                this.loadGadgetOnGadgetsCategoriesPage();
                break;
            default :
                this.loadGadgetOnHomePage();
        }
    }

    loadGadgetOnHomePage() {
        GadgetService.getTopGadgetsByView(6)
            .then(resp => {
                this.setState({gadgetTiles: resp.data});
            });
    }


    loadGadgetOnAllGadgetsPage() {
        GadgetService.getAllGadgets(this.offset, this.limit)
            .then(resp => {
                this.processGadgetsData(resp);
            });
    }


    loadGadgetOnGadgetsCategoriesPage() {
        GadgetService.getCategoryBasedData(this.props.categoryId, this.offset, this.limit)
            .then(resp => {
                this.processGadgetsData(resp);
            });
    }

    processGadgetsData(resp) {
        let data = resp.data;
        if (data.length > 0) {
            let newData = this.state.gadgetTiles.concat(data);
            this.setState({gadgetTiles: newData});
            this.offset += this.limit;
        } else {
            this.canLoadMore = false;
        }

        this.setState({loadMoreText: "Load More"});
    }


    render() {
        return (
            <div className="gadget-tiles-component">
                <div className="gadget-tiles-component-heading">
                    <h1>{this.props.name}</h1>
                </div>
                <div className="gadget-tiles-grid">
                    <ul>
                        {
                            this.state.gadgetTiles.map(gadget =>
                                    <li key={gadget.NAME}>
                                        <GadgetTile name={gadget.NAME}
                                                    description={gadget.DESCRIPTION}
                                                    imageUrl={gadget.IMAGE_URL}></GadgetTile>
                                    </li>
                            )
                        }
                        <div className="clear-both-side"></div>
                    </ul>
                </div>
                {
                    this.props.loadMoreEnabled ?
                        <div className="gadget-load-more-button">
                            <a onClick={this.loadMore.bind(this)}>{this.state.loadMoreText}</a>

                            <div className="clear-both-side"></div>
                        </div>
                        :

                        <div className="gadget-tiles-component-button">
                            <a href="/cool-gadgets">See All</a>

                            <div className="clear-both-side"></div>
                        </div>
                }

            </div>
        );
    }
}

export default SideStoryTile;
