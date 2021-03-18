import React from 'react';

export default ({currentUser, closeModal, logout}) => {
    const signOff = () => {
        closeModal();
        logout();
    }

    return (
        <div className="ReactModal__Overlay ReactModal__Overlay--after-open c-popover c-popover--z_above_fs" onClick={closeModal}>
            <div className="modal-child" onClick={e => e.stopPropagation()}>
                <div className="ReactModal__Content ReactModal__Content--after-open popover c-popover__content profile_modal">
                    <div role="presentation">
                        <div className="c-menu" data-qa="menu" style={{width: "300px"}}>
                            <div className="c-menu__items_scroller">
                                <div className="c-menu__items" data-qa="menu_items" role="menu" aria-label="User menu: Matt Yao" tabIndex="-1" no-bootstrap="1">
                                    <div aria-hidden="true">
                                        <div className="p-ia__main_menu__user">
                                            <div className="p-ia__nav__user">
                                                <span className="p-ia__nav__user__avatar c-avatar" style={{height: "36px", width: "36px"}}>
                                                    <img src="https://ca.slack-edge.com/T03GU501J-U01B49NV8BT-g274b1e8ddd6-48" srcSet="https://ca.slack-edge.com/T03GU501J-U01B49NV8BT-g274b1e8ddd6-72 2x" className="c-base_icon c-base_icon--image" aria-hidden="true" role="img" alt="" style={{height: "36px", width: "36px"}} />
                                                </span>
                                            </div>
                                            <div className="p-ia__main_menu__user__details">
                                                <div className="p-ia__main_menu__user__name_container">
                                                    <span className="p-ia__main_menu__user__name">{currentUser.fname+" "+currentUser.lname}</span>
                                                </div>
                                                <span className="p-ia__main_menu__user__presence">
                                                    <i className="c-icon c-presence c-presence--active c-icon--presence-dnd c-icon--inline" type="presence-dnd" title="Active, notifications snoozed" aria-hidden="true" data-qa="presence_indicator" data-qa-presence-self="true" data-qa-presence-active="true" data-qa-presence-dnd="true"></i>Active
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="p-ia__main_menu__custom_status_item p-ia__main_menu__custom_status_item--empty">
                                        <button className="c-button-unstyled p-ia__main_menu__custom_status_button" type="button" id="menu-1513-1" role="menuitem" aria-label="Update your status" tabIndex="-1" data-qa="main-menu-custom-status-item" style={{cursor:"not-allowed"}}>
                                            <div className="p-ia__main_menu__custom_status_icon">
                                                <i className="c-icon p-ia__main_menu__custom_status_icon__part p-ia__main_menu__custom_status_icon__hover p-ia__main_menu__custom_status_smile--fill c-icon--circle-fill" type="circle-fill" aria-hidden="true"></i>
                                                <i className="c-icon p-ia__main_menu__custom_status_icon__part c-icon--smile-o" type="smile-o" aria-hidden="true"></i>
                                                <i className="c-icon p-ia__main_menu__custom_status_icon__part p-ia__main_menu__custom_status_icon__hover p-ia__main_menu__custom_status_smile--happy c-icon--happy-smile" type="happy-smile" aria-hidden="true"></i>
                                            </div>
                                            Update your status
                                        </button>
                                    </div>
                                    <div className="c-menu_item__li" data-qa="menu_item_button-wrapper">
                                        <button className="c-button-unstyled c-menu_item__button" id="menu-1513-2" data-qa="menu_item_button" role="menuitem" tabIndex="-1" type="button" style={{cursor:"not-allowed"}}>
                                            <div className="c-menu_item__label">Set yourself as <strong>away</strong></div>
                                        </button>
                                    </div>
                                    <div role="presentation" className="c-submenu" data-qa="submenu_trigger_wrapper">
                                        <div className="c-menu_item__li" data-qa="menu_item_button-wrapper">
                                            <button className="c-button-unstyled c-menu_item__button c-menu_item__button--with_submenu" id="menu-1513-3" data-qa="menu_item_button" role="menuitem" aria-haspopup="true" tabIndex="-1" type="button" style={{cursor:"not-allowed"}}>
                                                <div className="c-menu_item__label">Pause notifications</div>
                                                <div className="c-menu_item__shortcut"><span className="p-ia__main_menu__dnd_label">On</span></div>
                                                <i className="c-icon c-menu_item__submenu-indicator c-icon--chevron-right" type="chevron-right" data-qa="menu_item_submenu_indicator" role="presentation" aria-hidden="true"></i>
                                            </button>
                                        </div>
                                    </div>
                                    <div aria-hidden="true" className="c-menu_separator__li">
                                        <hr className="c-menu_separator__separator" />
                                    </div>
                                    <div className="c-menu_item__li" data-qa="menu_item_button-wrapper">
                                        <button className="c-button-unstyled p-edit_profile_item__container c-menu_item__button" id="menu-1513-5" data-qa="menu_item_button" role="menuitem" tabIndex="-1" type="button" style={{cursor:"not-allowed"}}>
                                            <div className="c-menu_item__icon" data-qa="menu_item_icon" role="presentation">
                                                <i className="c-icon c-icon--camera-photo-filled" type="camera-photo-filled" aria-hidden="true"></i>
                                            </div>
                                            <div className="c-menu_item__label">Edit profile</div>
                                        </button>
                                    </div>
                                    <div className="c-menu_item__li" data-qa="menu_item_button-wrapper">
                                        <button className="c-button-unstyled c-menu_item__button" id="menu-1513-6" data-qa="menu_item_button" role="menuitem" tabIndex="-1" type="button" style={{cursor:"not-allowed"}}>
                                            <div className="c-menu_item__label">View profile</div>
                                        </button>
                                    </div>
                                    <div className="c-menu_item__li" data-qa="menu_item_button-wrapper">
                                        <button className="c-button-unstyled c-menu_item__button" id="menu-1513-7" data-qa="menu_item_button" role="menuitem" tabIndex="-1" type="button" style={{cursor:"not-allowed"}}>
                                            <div className="c-menu_item__label">Preferences</div>
                                        </button>
                                    </div>
                                    <div aria-hidden="true" className="c-menu_separator__li">
                                        <hr className="c-menu_separator__separator" />
                                    </div>
                                    <div className="c-menu_item__li" data-qa="menu_item_button-wrapper">
                                        <button className="c-button-unstyled c-menu_item__button" id="menu-1513-9" data-qa="menu_item_button" role="menuitem" tabIndex="-1" type="button" onClick={signOff}>
                                            <div className="c-menu_item__label"><strong>Sign out of buzzhive</strong></div>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}