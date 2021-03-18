import React from 'react';
import Footer from './footer';
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useHistory } from "react-router-dom";

export default ({searchString, searchResults, currentUser, directMessages, createDM, closeModal}) => {
    let history = useHistory();

    const filterResults = () => {
        const search = searchString.toLowerCase();
        const filtered = searchResults
            .filter(result => result.id != currentUser.id)
            .filter(result => result.username.toLowerCase().includes(search));
        return filtered.length > 0 ? filtered.slice(0, 5) : searchResults.slice(0, 5);
    }

    const filtered = filterResults();

    const handleClick = (id) => {
        let flag = true;
        for (var key in directMessages) {
            if (directMessages[key].users[id]) {
                history.push(`/client/dms/${directMessages[key].id}`);
                flag = false;
            }
        }
        if (flag) {
            // createDM({respondent_id: id}).then(res => console.log(res))
            createDM({respondent_id: id})
                .then((res) => history.push(`/client/dms/${res.data.directMessage.id}`));
        }
        closeModal();
    };

    const formatResults = () => {
        return filtered.map( result => {
            
            const icon = <FontAwesomeIcon icon={["far", "user"]} className="c-icon--user"/>

            return (
                <li key={ result.id } onClick={() => handleClick(result.id)}>
                    <div data-type="channel" id="c-search_autcomplete__suggestion_1" role="option" tabIndex="-1" aria-selected="false" aria-labelledby="c-search_autcomplete__suggestion_1 search-autocomplete-recent-channels-header" className="c-search_autocomplete__suggestion_item">
                        <div className="c-base_list_entity c-base_list_entity--small">
                            <div className="c-base_list_entity__primary_content">
                                <div className="c-small_channel_entity c-base_entity c-base_entity--small c-base_entity--has-avatar">
                                    {icon}
                                    <div className="c-base_entity__text-contents">
                                        <span className="c-base_entity__text">
                                            <span className="c-truncate c-truncate--break_words" style={{overflow: "hidden", textOverflow: "ellipsis", WebkitBoxOrient: "vertical", display: "-webkit-box", WebkitLineClamp: "1"}} >
                                                <span className="c-small_channel_entity__content c-small_channel_entity__content--xws">
                                                    <span className="c-channel_entity__name c-channel_entity__name--bold">{result.username}</span>
                                                </span>
                                            </span>
                                        </span>
                                    </div>
                                </div>
                            </div>
                            <div className="c-base_list_entity__secondary_content">
                                <div className="c-small_channel_entity__secondary-content-badge"></div>
                            </div>
                        </div>
                    </div>
                </li>
            )
        });
    }

    const results = formatResults();

    return (
        <div className="c-search_autocomplete__container" data-qa="search_autocomplete" style={{marginTop: "0"}}>
            <div className="c-search_autocomplete">
                <div className="offscreen">
                    <span id="search-autocomplete-query-label-prefix-node">Search</span>
                </div>
                <ol className="c-search_autocomplete__suggestion_list" role="listbox" id="c-search_autocomplete__suggestion_list">
                    <li role="presentation">
                        <header className="c-search_autocomplete_section_header c-search_autocomplete_section_header--first">
                            <span className="c-search_autocomplete__header_label">
                                <span className="c-search_autocomplete__header_label_text" id="search-autocomplete-recent-channels-header">Other buzzhive users</span>
                            </span>
                        </header>
                    </li>
                    {results}
                </ol>
                <Footer />
            </div>
        </div>
    )
};