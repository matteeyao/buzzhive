import React, { Component } from "react";
import Hives from './components/hives/container';
import DirectMessages from './components/direct_messages/container';

class SidebarDetail extends Component {
    render() {
        return (
            <div className="p-workspace__sidebar" style={{width: "260px"}}>
                <div className="p-workspace__channel_sidebar" data-qa="ws_channel_sidebar">
                    <div className="p-ia__sidebar_header p-ia__sidebar_header--top-nav">
                        <div tabIndex="-1" data-qa="sidebar_header_button" className="p-ia__sidebar_header__button" aria-haspopup="menu" aria-expanded="false">
                            <div className="p-ia__sidebar_header__info">
                                <button className="c-button-unstyled p-ia__sidebar_header__team_name" data-qa="team-menu-trigger" aria-label="Main menu for App Academy" type="button" onClick={this.props.aboutModal}>
                                    <span className="p-ia__sidebar_header__team_name_text">buzzhive</span> 
                                    <i className="c-icon p-ia__sidebar_header__menu_icon c-icon--chevron-down" type="chevron-down" aria-hidden="true"></i>
                                </button>
                            </div>
                        </div>
                        <button className="c-button-unstyled p-channel_sidebar__compose_button p-channel_sidebar__compose_button--iap1" aria-label="New message" data-qa="composer_button" delay="300" data-sk="tooltip_parent" type="button" onClick={this.props.hiveModal}>
                            <svg height="16px" viewBox="0 0 20 20" className="p-channel_sidebar__compose_button_svg_icon">
                                <path d="M8.66000142,13.3899994 L10.3700017,12.6999993 C10.8700018,12.4999993 11.3300019,12.1999992 11.7100019,11.8199992 
                                    L19.5600032,3.96999786 C20.1900033,3.33999776 20.0600033,2.19999757 19.2800032,1.41999745 L18.570003,0.70999733 
                                    C17.7900029,-0.070002798 16.6500027,-0.190002818 16.0300026,0.429997284 L8.22000135,8.23999856 C7.81000128,8.64999863 
                                    7.49000123,9.13999871 7.29000119,9.6899988 L6.65000109,11.4199991 C6.120001,12.7599993 7.29000119,13.9099995 
                                    8.66000142,13.3899994 Z M14.4200024,18.9999974 C16.8700028,18.9999974 19.0000002,16.96 19.0000002,14.4199996 
                                    L19.0000002,8.49999738 C19.0000002,7.34999842 17.5000002,7.34999842 17.5000002,8.49999738 L17.5000002,14.1199995 
                                    C17.5000002,16.1099999 16.1100026,17.4999974 14.1200023,17.4999974 L5.88000096,17.4999974 C3.89000064,17.4999974 
                                    2.50000016,16.1099999 2.50000016,14.1199995 L2.50000016,5.87999818 C2.50000016,3.88999785 3.89000064,2.49999738 
                                    5.88000096,2.49999738 L11.5000002,2.49999738 C12.6900021,2.49999738 12.6800021,0.999997377 11.5000002,0.999997377 
                                    L5.58000091,0.999997377 C3.0300005,0.999997377 1.00000016,3.03999771 1.00000016,5.57999813 L1.00000016,14.4199996 
                                    C1.00000016,16.96 3.0300005,18.9999974 5.58000091,18.9999974 L14.4200024,18.9999974 Z M17.2100028,4.1899979 
                                    L15.8000026,2.76999767 L16.9500028,1.61999748 C17.0600028,1.50999746 17.3300028,1.54999747 17.5200029,1.7499975 
                                    L18.230003,2.45999762 C18.430003,2.65999765 18.470003,2.92999769 18.370003,3.01999771 L17.2100028,4.1899979 Z 
                                    M7.98000131,12.0499992 L8.67000142,10.1099989 C8.75000143,9.88999883 8.86000145,9.71999881 9.02000148,9.54999878 
                                    L14.7300024,3.83999784 L16.1400026,5.24999807 L10.4300017,10.989999 C10.2500017,11.159999 10.0900017,11.2599991 
                                    9.90000162,11.3299991 L8.00000131,12.0699992 C7.98000131,12.0799992 7.97000131,12.0699992 7.98000131,12.0499992 Z" 
                                    id="compose-dm" fillRule="nonzero"></path>
                            </svg>
                        </button>
                    </div>
                    <div className="p-channel_sidebar p-channel_sidebar--classic_nav p-channel_sidebar--iap1 p-channel_sidebar--show_more_feature" data-qa-channel-sidebar="true" data-qa-channel-sidebar-selected-item-id="CS7KHRL7L" data-qa-channel-sidebar-sections-booted="true" aria-label="Channel Sidebar">
                        <div className="p-channel_sidebar__list" style={{position: "relative"}}>
                            <div style={{overflow: "visible", height: "0px", width: "0px"}}>
                                <div role="presentation">
                                    <div role="tree" aria-label="Channels and direct messages" aria-describedby="channel_sidebar_summary" className="c-virtual_list c-virtual_list--scrollbar p-channel_sidebar__static_list c-scrollbar" style={{width: "260px", height: "842px"}}>
                                        <div data-qa="slack_kit_scrollbar" role="presentation" className="c-scrollbar__hider">
                                            <div role="presentation" className="c-scrollbar__child" style={{width: "260px"}}>
                                                <div data-qa="slack_kit_list" className="c-virtual_list__scroll_container" role="presentation" style={{position: "relative", height: "842px", overflowY: "hidden"}}>
                                                    <div aria-level="1" aria-setsize="7" aria-posinset="1" className="p-channel_sidebar__static_list__item c-virtual_list__item" tabIndex="-1" role="treeitem" id="Vall_threads" data-qa="virtual-list-item" style={{top: "12px"}}>
                                                        <button className="c-button-unstyled p-channel_sidebar__link p-channel_sidebar__link--all-threads not-allowed" role="presentation" data-sidebar-link-id="Vall_threads" data-qa-channel-sidebar-link-id="Vall_threads" tabIndex="-1" type="button">
                                                            <span className="p-channel_sidebar__name" data-qa="channel_sidebar_name_all_thread_link">Threads</span>
                                                        </button>
                                                    </div>
                                                    <div aria-level="1" aria-setsize="7" aria-posinset="2" className="p-channel_sidebar__static_list__item c-virtual_list__item" tabIndex="-1" role="treeitem" id="Pdms" data-qa="virtual-list-item" style={{top: "40px"}}>
                                                        <div>
                                                            <button className="c-button-unstyled p-channel_sidebar__link p-channel_sidebar__link--page p-channel_sidebar__link--page_pdms position_relative not-allowed" role="presentation" data-sidebar-link-id="Pdms" data-qa-channel-sidebar-link-id="Pdms" tabIndex="-1" aria-label="All direct messages" type="button">
                                                                <i className="c-icon p-channel_sidebar__link__icon c-icon--dm c-icon--inherit" type="dm" aria-hidden="true"></i><span className="p-channel_sidebar__name" data-qa="channel_sidebar_name_page_pdms">All DMs</span>
                                                            </button>
                                                        </div>
                                                    </div>
                                                    <div aria-level="1" aria-setsize="7" aria-posinset="3" className="p-channel_sidebar__static_list__item c-virtual_list__item" tabIndex="-1" role="treeitem" id="Pactivity" data-qa="virtual-list-item" style={{top: "68px"}}>
                                                        <div>
                                                            <button className="c-button-unstyled p-channel_sidebar__link p-channel_sidebar__link--page p-channel_sidebar__link--page_pactivity position_relative not-allowed" role="presentation" data-sidebar-link-id="Pactivity" data-qa-channel-sidebar-link-id="Pactivity" tabIndex="-1" type="button">
                                                                <i className="c-icon p-channel_sidebar__link__icon p-channel_sidebar__link__activity c-icon--mentions c-icon--inherit" type="mentions" aria-hidden="true"></i>
                                                                <span className="p-channel_sidebar__name" data-qa="channel_sidebar_name_page_pactivity">Mentions &amp; reactions</span>
                                                            </button>
                                                        </div>
                                                    </div>
                                                    <div aria-level="1" aria-setsize="7" aria-posinset="4" className="p-channel_sidebar__static_list__item c-virtual_list__item" tabIndex="-1" role="treeitem" id="Psaved" data-qa="virtual-list-item" style={{top: "96px"}}>
                                                        <div>
                                                            <button className="c-button-unstyled p-channel_sidebar__link p-channel_sidebar__link--page p-channel_sidebar__link--page_psaved position_relative not-allowed" role="presentation" data-sidebar-link-id="Psaved" data-qa-channel-sidebar-link-id="Psaved" tabIndex="-1" type="button">
                                                                <i className="c-icon p-channel_sidebar__link__icon c-icon--bookmark c-icon--inherit" type="bookmark" aria-hidden="true"></i>
                                                                <span className="p-channel_sidebar__name" data-qa="channel_sidebar_name_page_psaved">Saved items</span>
                                                            </button>
                                                        </div>
                                                    </div>
                                                    <div className="p-channel_sidebar__static_list__item c-virtual_list__item" tabIndex="-1" role="treeitem" id="morePages" data-qa="virtual-list-item" style={{top: "124px"}}>
                                                        <button className="c-button-unstyled p-channel_sidebar__section_heading p-channel_sidebar__section-heading--pages-drawer not-allowed" aria-label="More pages" tabIndex="-1" aria-haspopup="menu" aria-expanded="false" type="button">
                                                            <i className="c-icon p-channel_sidebar__section-heading--pages-drawer-icon c-icon--vertical-ellipsis c-icon--inherit c-icon--inline" type="vertical-ellipsis" aria-hidden="true"></i>
                                                            <span className="p-channel_sidebar__name" data-qa="channel_sidebar_name_page_psaved">More</span>
                                                        </button>
                                                    </div>
                                                    <Hives />
                                                    <DirectMessages />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default SidebarDetail;
