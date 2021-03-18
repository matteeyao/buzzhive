import React from "react";

export default ({name, currentDirectMessage, currentUser, aboutModal}) => {

    return ( <div className="p-ia__view_header">
        <div className="p-ia__view_header__info">
            <div className="p-ia__view_header__title_and_channel_section">
                <div className="p-channel_section_selector">
                    <span>
                        <button className="c-button-unstyled p-channel_section_selector__star" data-qa="channel-header-star-button" aria-label="Star channel general" delay="150" data-sk="tooltip_parent" type="button" >
                            <i className="c-icon p-channel_section_selector__icon c-icon--star-o c-icon--inherit c-icon--inline" type="star-o" aria-hidden="true" style={{top: "-10%"}}></i>
                        </button>
                    </span>
                </div>
                <div className="p-classic_nav__model__title__name p-classic_nav__no_drag">
                    <button className="c-button-unstyled p-classic_nav__model__title__name__button" data-qa="channel_name" type="button">
                        {name}
                    </button>
                </div>
            </div>
        </div>
        <div className="p-ia__view_header__spacer"></div>
        <span className="p-avatar_stack">
            {/* <button className="c-button-unstyled p-ia__view_header__button" aria-label="Add people to #general" delay="150" data-sk="tooltip_parent" type="button" onClick={showHiveUsersModal}>
                <i className="c-icon p-ia__view_header__button_icon c-icon--add-user" type="add-user" aria-hidden="true"></i>
            </button> */}
            <button className="c-button-unstyled p-ia__view_header__button" data-qa="channel-details" type="button" aria-label="Show details for channel #general" aria-expanded="false" delay="300" data-sk="tooltip_parent" onClick={aboutModal}>
                <i className="c-icon p-ia__view_header__button_icon c-icon--info-circle" type="info-circle" aria-hidden="true"></i> 
            </button>
        </span>
    </div> );
};