import React from "react";
import { Link } from 'react-router-dom';

export default ({currentHive}) => {

    return (
        <div className="p-flexpane_header">
            <div className="p-flexpane_header__primary">
                <div className="p-flexpane_header__primary_content">
                    <div className="p-flexpane__title_container" data-qa="flexpane-title-container">
                        Thread
                        <div className="p-flexpane__subtitle" data-qa="subtitle">
                            <Link className="c-link p-threads_flexpane__header_permalink" to={`/hives/${currentHive.id}`} rel="noopener noreferrer">
                                <span className="p-threads_flexpane__header_channel_name c-inline_channel_entity c-base_inline_entity c-base_inline_entity--has_avatar c-base_inline_entity--truncate_block" data-qa="inline_channel_entity" data-channel-id="C03GU502Q">
                                    <span>
                                        <span className="c-truncate c-truncate--break_words" style={{overflow: "hidden", textOverflow: "ellipsis", webkitBoxOrient: "vertical", display: "-webkit-box", webkitLineClamp: "1"}}>
                                            <i className="c-icon c-base_inline_entity__avatar c-inline_channel_entity__icon c-inline_channel_icon c-icon--hash-medium c-icon--inherit" type="hash-medium" aria-hidden="true"></i>
                                            <span className="c-base_inline_entity__primary_content">
                                                <span className="c-inline_channel_entity__content">
                                                    <span className="c-channel_entity__name" data-qa="inline_channel_entity__name">
                                                        {currentHive.name}
                                                    </span>
                                                </span>
                                            </span>
                                        </span>
                                    </span>
                                </span>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}