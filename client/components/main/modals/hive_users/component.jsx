import React, { Component } from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

class Search extends Component {
    constructor(props) {
        super(props);
        this.state = {
            searchString: "",
        }
    }

    componentDidMount() {
    }

    render() {
        const { closeModal, currentHive } = this.props;

        const clear = this.state.searchString ? "c-button-unstyled c-search__input_box__clear" : "c-button-unstyled c-search__input_box__clear c-search__input_box__clear__hidden";

        return (
            <div className="ReactModal__Overlay ReactModal__Overlay--after-open c-popover c-search_modal c-search_modal--autocomplete c-search_modal--iap1_topnav c-search_modal--initial_autocomplete c-popover--z_above_fs" onClick={closeModal}>
                {/* <div className="hive-popover__content" aria-label="Search" style={{position: "absolute", outline: "none", marginTop: "0px"}} onClick={e => e.stopPropagation()}>
                    <div role="presentation">
                        <div className="c-search__input_and_close">
                            <div className="c-search__input_box" data-qa="search_input_box" role="presentation" style={{paddingRight: "0"}}>
                                <div className="c-search__input_box__container c-basic_container c-basic_container--size_medium c-basic_container--prefixed c-basic_container--suffixed" aria-invalid="false">
                                    <h2>Add hive members to {currentHive.isPrivate ? <FontAwesomeIcon icon="lock" /> : <FontAwesomeIcon icon="hashtag" />} {currentHive.name}</h2>
                                </div>
                            </div>
                            <button className="c-button-unstyled c-search__input_and_close__close" aria-label="Close" data-qa="search_input_close" type="button" onClick={closeModal}>
                                <i className="c-icon c-icon--times" type="times" aria-hidden="true"></i>
                            </button>
                        </div>
                    </div>
                </div> */}
            </div>
        );
    }
}

export default Search;
