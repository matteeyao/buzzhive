import React, { Component } from 'react';
import StaticAutocomplete from './components/static_autocomplete';
import DynamicAutocomplete from './components/dynamic_autocomplete';

class Search extends Component {
    constructor(props) {
        super(props);
        this.state = {
            searchString: "",
        }
    }

    componentDidMount() {
        this.props.searchHives();
    }

    render() {
        const { closeModal } = this.props;

        const autocomplete = this.state.searchString ? 
            <DynamicAutocomplete 
                searchString={this.state.searchString}
                searchResults={this.props.search}
                closeModal={closeModal}
                 /> :
            <StaticAutocomplete />

        const clear = this.state.searchString ? "c-button-unstyled c-search__input_box__clear" : "c-button-unstyled c-search__input_box__clear c-search__input_box__clear__hidden";

        return (
            <div className="ReactModal__Overlay ReactModal__Overlay--after-open c-popover c-search_modal c-search_modal--autocomplete c-search_modal--iap1_topnav c-search_modal--initial_autocomplete c-popover--z_above_fs" onClick={closeModal}>
                <div className="ReactModal__Content ReactModal__Content--after-open popover c-popover__content" aria-label="Search" style={{position: "absolute", outline: "none", marginTop: "0px"}} onClick={e => e.stopPropagation()}>
                    <div role="presentation">
                        <div className="c-search__input_and_close">
                            <div className="c-search__input_box" data-qa="search_input_box" role="presentation">
                                <div className="c-search__input_box__container c-basic_container c-basic_container--size_medium c-basic_container--prefixed c-basic_container--suffixed" aria-invalid="false">
                                    <div className="c-basic_container__body">
                                        <i className="c-icon c-search__input_box__icon c-icon--search-medium" type="search-medium" aria-hidden="true"></i>
                                        <div className="c-texty_input_unstyled__container c-texty_input_unstyled__container--size_medium c-texty_input_unstyled__container--single_line c-texty_input_unstyled__container--use_focus_ring c-texty_input_unstyled__container--no_actions" data-buttons="0">
                                            <div data-qa="focusable_search_input" data-min-lines="1" className="texty_single_line_input texty_hide_tooltips c-texty_input_unstyled ql-container focus">
                                                <input type="text" className="ql-editor ql-blank" data-gramm="false" contentEditable="true" dir="auto" role="combobox" tabIndex="0" data-team-id="T03GU501J" aria-label="Search" aria-multiline="false" aria-autocomplete="list" aria-owns="c-search_autocomplete__suggestion_list" aria-expanded="true" spellCheck="true"
                                                    autoFocus={true} 
                                                    onChange={ e => this.setState({ searchString: e.target.value }) }
                                                    value={ this.state.searchString }
                                                    placeholder={ "Surely that's around here somewhere..." } />
                                                {/* <div className="ql-clipboard" contentEditable="true" tabIndex="-1" aria-hidden="true" role="presentation"></div>
                                                <div className="ql-placeholder" aria-hidden="true" role="presentation" tabIndex="-1" data-reactroot=""></div> */}
                                            </div>
                                        </div>
                                        <button className={clear} 
                                            label="Clear" 
                                            data-qa="search_input_clear" 
                                            tabIndex="-1" type="button"
                                            onMouseDown={ e => e.preventDefault() }
                                            onClick={ e => {
                                                e.preventDefault();
                                                this.setState({searchString: ""});
                                            }} >Clear</button>
                                    </div>
                                </div>
                            </div>
                            <button className="c-button-unstyled c-search__input_and_close__close" aria-label="Close" data-qa="search_input_close" type="button" onClick={closeModal}>
                                <i className="c-icon c-icon--times" type="times" aria-hidden="true"></i>
                            </button>
                        </div>
                        {autocomplete}
                    </div>
                </div>
            </div>
        );
    }
}

export default Search;
