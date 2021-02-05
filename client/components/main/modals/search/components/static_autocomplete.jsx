import React from 'react';
import Footer from './footer';

export default ({}) => {
    return (
        <div className="c-search_autocomplete__container" data-qa="search_autocomplete">
            <div className="c-search_autocomplete">
                <div className="offscreen">
                    <span id="search-autocomplete-query-label-prefix-node">Search</span>
                </div>
                <ol className="c-search_autocomplete__suggestion_list" role="listbox" id="c-search_autocomplete__suggestion_list">
                    <li role="presentation">
                        <header className="c-search_autocomplete_section_header c-search_autocomplete_section_header--first">
                            <span className="c-search_autocomplete__header_label">
                                <span className="c-search_autocomplete__header_label_text">I'm looking for…</span>
                            </span>
                        </header>
                    </li>
                    <li className="c-search_autocomplete__guided_search_wrapper">
                        <ul className="c-search_autocomplete__guided_search_container" role="listbox">
                            <li aria-selected="false" role="option" tabIndex="-1" id="guided-search-item-0" aria-label="Search messages, I'm looking for…" data-qa="guided_search_button_messages">
                                <button className="c-button-unstyled c-search_autocomplete__guided_search_item c-search_autocomplete__guided_search_item--dark c-search_autocomplete__guided_search_item--hover" tabIndex="-1" type="button"><i className="c-icon c-icon--dm c-icon--inherit" type="dm" aria-hidden="true"></i>
                                    <span className="c-search_autocomplete__guided_search_item_title">Messages</span>
                                </button>
                            </li>
                            <li aria-selected="false" role="option" tabIndex="-1" id="guided-search-item-1" aria-label="Search files, I'm looking for…" data-qa="guided_search_button_files">
                                <button className="c-button-unstyled c-search_autocomplete__guided_search_item c-search_autocomplete__guided_search_item--dark c-search_autocomplete__guided_search_item--hover" tabIndex="-1" type="button"><i className="c-icon c-icon--all-files-alt c-icon--inherit" type="all-files-alt" aria-hidden="true"></i>
                                    <span className="c-search_autocomplete__guided_search_item_title">Files</span>
                                </button>
                            </li>
                            <li aria-selected="false" role="option" tabIndex="-1" id="guided-search-item-2" aria-label="Search channels, I'm looking for…" data-qa="guided_search_button_channels">
                                <button className="c-button-unstyled c-search_autocomplete__guided_search_item c-search_autocomplete__guided_search_item--dark c-search_autocomplete__guided_search_item--hover" tabIndex="-1" type="button"><i className="c-icon c-icon--channels c-icon--inherit" type="channels" aria-hidden="true"></i>
                                    <span className="c-search_autocomplete__guided_search_item_title">Channels</span>
                                </button>
                            </li>
                            <li aria-selected="false" role="option" tabIndex="-1" id="guided-search-item-3" aria-label="Search people, I'm looking for…" data-qa="guided_search_button_people">
                                <button className="c-button-unstyled c-search_autocomplete__guided_search_item c-search_autocomplete__guided_search_item--dark c-search_autocomplete__guided_search_item--hover" tabIndex="-1" type="button"><i className="c-icon c-icon--user-groups c-icon--inherit" type="user-groups" aria-hidden="true"></i>
                                    <span className="c-search_autocomplete__guided_search_item_title">People</span>
                                </button>
                            </li>
                        </ul>
                    </li>
                </ol>
                <Footer />
            </div>
        </div>
    )
};