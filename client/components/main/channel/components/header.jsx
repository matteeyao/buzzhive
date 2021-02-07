import React from "react";

export default ({currentHive, users}) => (
    <div className="p-ia__view_header">
        <div className="p-ia__view_header__info">
            <div className="p-ia__view_header__title_and_channel_section">
                <div className="p-classic_nav__model__title__name p-classic_nav__no_drag">
                    <button className="c-button-unstyled p-classic_nav__model__title__name__button" data-qa="channel_name" type="button">
                        <i className="c-icon c-inline_channel_icon c-icon--hash-medium-bold c-icon--inherit" type="hash-medium-bold" aria-hidden="true"></i>general
                    </button>
                </div>
                <div className="p-channel_section_selector">
                    <span>
                        <button className="c-button-unstyled p-channel_section_selector__star" data-qa="channel-header-star-button" aria-label="Star channel general" delay="150" data-sk="tooltip_parent" type="button">
                            <i className="c-icon p-channel_section_selector__icon c-icon--star-o c-icon--inherit c-icon--inline" type="star-o" aria-hidden="true"></i>
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
                                <span className="c-emoji c-emoji__small c-emoji--inline" data-qa="emoji" delay="300" data-sk="tooltip_parent">
                                    <img src="https://emoji.slack-edge.com/T03GU501J/appacademy/e0819e0d50ec9775.png" aria-label="appacademy emoji" alt=":appacademy:" data-stringify-type="emoji" data-stringify-emoji=":appacademy:" />
                                </span>
                            </span>
                        </div>
                        <button className="c-button-unstyled p-classic_nav__model__title__info__topic__edit" aria-label="Edit channel topic" type="button">Edit</button>
                    </div>
                    <span className="p-classic_nav__model__title__info__sep" aria-hidden="true">|</span>
                </div>
            </div>
            <div className="p-ia__view_header__spacer"></div>
            <span className="p-avatar_stack">
                <button className="c-button-unstyled p-avatar_stack__stack" aria-label="View all 4,497 members. Includes Shawki Kased, Hayden Linder, and Ali Kim." delay="150" data-sk="tooltip_parent" type="button">
                    <div className="p-avatar_stack__stack__avatars">
                        <span className="p-avatar_stack__avatar c-avatar" style={{height: "24px", width: "24px"}}>
                            <img src="https://ca.slack-edge.com/T03GU501J-UNDSYKG0Y-0219bb03397a-24" srcSet="https://ca.slack-edge.com/T03GU501J-UNDSYKG0Y-0219bb03397a-48 2x" className="c-base_icon c-base_icon--image" aria-hidden="true" role="img" alt="" style={{height: "24px", width: "24px"}} />
                        </span>
                        <span className="p-avatar_stack__avatar c-avatar" style={{height: "24px", width: "24px"}}>
                            <img src="https://ca.slack-edge.com/T03GU501J-UQ5EAEAQN-c0ae8ce97ede-24" srcSet="https://ca.slack-edge.com/T03GU501J-UQ5EAEAQN-c0ae8ce97ede-48 2x" className="c-base_icon c-base_icon--image" aria-hidden="true" role="img" alt="" style={{height: "24px", width: "24px"}} />
                        </span>
                        <span className="p-avatar_stack__avatar c-avatar" style={{height: "24px", width: "24px"}}>
                            <img src="https://ca.slack-edge.com/T03GU501J-U0161BM3DGU-gc581b9a2e54-24" srcSet="https://ca.slack-edge.com/T03GU501J-U0161BM3DGU-gc581b9a2e54-48 2x" className="c-base_icon c-base_icon--image" aria-hidden="true" role="img" alt="" style={{height: "24px", width: "24px"}} />
                        </span>
                        <span className="p-avatar_stack__count">4,497</span>
                    </div>
                </button>
                <button className="c-button-unstyled p-ia__view_header__button" aria-label="Add people to #general" delay="150" data-sk="tooltip_parent" type="button">
                    <i className="c-icon p-ia__view_header__button_icon c-icon--add-user" type="add-user" aria-hidden="true"></i>
                </button>
            </span>
            <button className="c-button-unstyled p-ia__view_header__button" data-qa="channel-details" type="button" aria-label="Show details for channel #general" aria-expanded="false" delay="300" data-sk="tooltip_parent">
                <i className="c-icon p-ia__view_header__button_icon c-icon--info-circle" type="info-circle" aria-hidden="true"></i> 
            </button>
        </div>
    </div>
)