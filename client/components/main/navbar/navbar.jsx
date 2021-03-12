import React from 'react';

export default ({ profileModal, searchModal, aboutModal }) => {
    return (
        <div className="p-top_nav p-top_nav--dark" role="navigation" aria-label="History and search" data-qa="top-nav">
            <div className="p-top_nav__sidebar">
                <button className="c-button-unstyled p-top_nav__button p-top_nav__history_menu" aria-label="Show history" data-qa="top-nav-history-menu" delay="150" aria-haspopup="menu" aria-expanded="false" data-sk="tooltip_parent" type="button" onClick={aboutModal}>
                    <i className="c-icon c-icon--clock-o" type="clock-o" aria-hidden="true"></i>
                </button>
            </div>
            <div className="p-top_nav__search__container">
                <button className="c-button-unstyled p-top_nav__search p-top_nav__search--mac" aria-label="Search" data-qa="top_nav_search" delay="150" data-sk="tooltip_parent" type="button" onClick={searchModal}>
                    <i className="c-icon p-top_nav__search__icon c-icon--search-medium c-icon--inherit" type="search-medium" aria-hidden="true"></i> 
                    <span className="p-top_nav__search__text">Find or start a conversation</span>
                </button>
            </div>
            <div className="p-top_nav__windows_controls_container margin_left_100" data-qa="top-nav-help-button" delay="150" aria-haspopup="menu" aria-expanded="false" data-sk="tooltip_parent" onClick={aboutModal}>
                <button className="c-button-unstyled p-top_nav__button p-top_nav__help" aria-label="Help" type="button">
                    <i className="c-icon c-icon--question-circle" type="question-circle" aria-hidden="true"></i>
                </button>
            </div>
            <div className="p-top_nav__right">
                <button className="c-button-unstyled p-ia__nav__user__button p-top_nav__button p-top_nav__windows_controls_container" data-qa="user-button" aria-label="User menu: Matt Yao" delay="150" aria-haspopup="menu" aria-expanded="false" data-sk="tooltip_parent" type="button" onClick={profileModal}>
                    <div className="p-ia__nav__user">
                        <span className="p-ia__nav__user__avatar c-avatar" style={{height:"28px", width:"28px"}}>
                            <img src="https://ca.slack-edge.com/T03GU501J-U01B49NV8BT-g274b1e8ddd6-32" srcSet="https://ca.slack-edge.com/T03GU501J-U01B49NV8BT-g274b1e8ddd6-72 2x" className="c-base_icon c-base_icon--image" aria-hidden="true" role="img" alt="" style={{height:"28px", width:"28px"}} />
                        </span>
                        <i className="c-icon p-ia__nav__user__presence--stroke c-presence c-presence--active c-icon--presence-online" type="presence-online" title="Active" aria-hidden="true" data-qa="presence_indicator" data-qa-presence-self="true" data-qa-presence-active="true" data-qa-presence-dnd="false"></i>
                        <i className="c-icon p-ia__nav__user__presence c-presence c-presence--active c-icon--presence-online" type="presence-online" title="Active" aria-hidden="true" data-qa="presence_indicator" data-qa-presence-self="true" data-qa-presence-active="true" data-qa-presence-dnd="false"></i>
                    </div>
                </button>
            </div>
        </div>
    );
};