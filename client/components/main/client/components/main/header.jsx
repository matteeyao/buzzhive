import React from "react";

export default ({currentHive, hiveUsers, currentUser, aboutModal, hiveUsersModal}) => {
    const icon = currentHive.isPrivate ? 
        <i className="c-icon c-inline_channel_icon c-inline_channel_icon--private c-icon--lock-medium c-icon--inherit" type="lock-medium" aria-hidden="true"></i> :
        <i className="c-icon c-inline_channel_icon c-icon--hash-medium-bold c-icon--inherit" type="hash-medium-bold" aria-hidden="true"></i>

    const showHiveUsersModal = () => { 
        if (Object.values(hiveUsers)
            .map(user => user.id)
            .includes(currentUser.id)) {
                hiveUsersModal()
            }
    }


    return ( <div className="p-ia__view_header">
        <div className="p-ia__view_header__info">
            <div className="p-ia__view_header__title_and_channel_section">
                <div className="p-classic_nav__model__title__name p-classic_nav__no_drag">
                    <button className="c-button-unstyled p-classic_nav__model__title__name__button" data-qa="channel_name" type="button">
                        {icon}{currentHive.name}
                    </button>
                </div>
                <div className="p-channel_section_selector">
                    <span>
                        <button className="c-button-unstyled p-channel_section_selector__star" data-qa="channel-header-star-button" aria-label="Star channel general" delay="150" data-sk="tooltip_parent" type="button" >
                            <i className="c-icon p-channel_section_selector__icon c-icon--star-o c-icon--inherit c-icon--inline" type="star-o" aria-hidden="true" style={{maxWidth: "13px", maxHeight: "13px"}}></i>
                        </button>
                    </span>
                </div>
            </div>
            <div className="p-ia__view_header__metadata">
                <div data-qa="channel_header__title__info" className="p-classic_nav__model__title__info p-classic_nav__no_drag">
                    <button className="c-button-unstyled p-classic_nav__model__title__info__pins" aria-label="Show items pinned in channel general" aria-expanded="false" delay="150" data-sk="tooltip_parent" type="button">
                        <i className="c-icon c-icon--thumb-tack c-icon--inherit c-icon--inline" type="thumb-tack" aria-hidden="true"></i>&nbsp;3
                    </button>
                    <span className="p-classic_nav__model__title__info__sep" aria-hidden="true">|</span>
                    <div role="presentation" className="p-classic_nav__model__title__info__item p-classic_nav__model__title__info__topic">
                        <div className="p-classic_nav__model__title__info__topic__text">
                            <span className="p-classic_nav__model__title__info__topic__content" dir="auto">
                                <a target="_blank" className="c-link" delay="150" data-sk="tooltip_parent" href={currentHive.refLink} rel="noopener noreferrer">
                                    {currentHive.refLink}
                                </a>
                            </span>
                        </div>
                        <button className="c-button-unstyled p-classic_nav__model__title__info__topic__edit" aria-label="Edit channel topic" type="button">Edit</button>
                    </div>
                    <span className="p-classic_nav__model__title__info__sep" aria-hidden="true">|</span>
                </div>
            </div>
        </div>
        <div className="p-ia__view_header__spacer"></div>
        <span className="p-avatar_stack">
            <button className="c-button-unstyled p-ia__view_header__button" aria-label="Add people to #general" delay="150" data-sk="tooltip_parent" type="button" onClick={showHiveUsersModal}>
                <i className="c-icon p-ia__view_header__button_icon c-icon--add-user" type="add-user" aria-hidden="true"></i>
            </button>
            <button className="c-button-unstyled p-ia__view_header__button" data-qa="channel-details" type="button" aria-label="Show details for channel #general" aria-expanded="false" delay="300" data-sk="tooltip_parent" onClick={aboutModal}>
                <i className="c-icon p-ia__view_header__button_icon c-icon--info-circle" type="info-circle" aria-hidden="true"></i> 
            </button>
        </span>
    </div> );
};