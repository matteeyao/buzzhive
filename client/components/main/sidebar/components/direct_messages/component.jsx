import React from 'react';
import Item from './item';

class HiveIndex extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        // this.props.fetchHives();
    }
    
    render() {
        const directMessages = this.props.hives.map((hive,idx) => (
            <Item
                key={idx}
                hive={hive}
                idx={idx}
                startPos={this.props.hivesLength+36}
            />
        ));

        return (
            <>
                <div aria-expanded="true" aria-level="1" aria-label="Direct Messages" aria-describedby="sectionHeading-L01B4NJB0TT-description channel-sections-reorder-description" aria-setsize="7" aria-posinset="6" className="p-channel_sidebar__static_list__item c-virtual_list__item" tabIndex="-1" role="treeitem" id="sectionHeading-L01B4NJB0TT" data-qa="virtual-list-item" style={{top: `${this.props.hivesLength}px`}}>
                    <div className="p-channel_sidebar__section_heading p-channel_sidebar__drop_target_indicator" data-qa-channel-sidebar-section-heading="direct_messages" data-qa="direct_messages" draggable="true">
                        <span role="presentation" className="p-channel_sidebar__section_heading_expand_container p-channel_sidebar__section_heading_expand_container--show_more_feature" aria-hidden="true">
                            <i className="c-icon p-channel_sidebar__section_heading_expand p-channel_sidebar__section_heading_expand--show_more_feature c-icon--caret-right c-icon--inherit c-icon--inline" data-qa="channel-section-collapse" type="caret-right" aria-hidden="true"></i>
                        </span>
                        <button className="c-button-unstyled p-channel_sidebar__section_heading_label p-channel_sidebar__section_heading_label--clickable" data-qa="channel_sidebar__section_heading_label__direct_messages" tabIndex="-1" delay="300" data-sk="tooltip_parent" type="button">
                            <span className="p-channel_sidebar__section_heading_label_overflow">Direct Messages:</span>
                        </button>
                        <div className="p-channel_sidebar__section_heading_right">
                            <button className="c-button-unstyled p-channel_sidebar__section_heading_right_item p-channel_sidebar__section_heading_plus p-channel_sidebar__section_heading_plus--hover-reveal" aria-hidden="true" tabIndex="-1" data-qa="channel_sidebar__plus__direct_messages" delay="300" data-sk="tooltip_parent" type="button"></button>
                        </div>
                    </div>
                </div>
                <div aria-owns="D01C9HZ0Q0L G01HFKB0B6G D01C280M82C D01HPK30XHU D01DXNZU0A3 D01FN2ZAULW D01DCJHDCRF addMoreDM" aria-label="Direct Messages" className="p-channel_sidebar__static_list__item c-virtual_list__item" tabIndex="-1" role="group" id="sectionHeadingAriaGroup-L01B4NJB0TT" data-qa="virtual-list-item" style={{top: `${this.props.hivesLength + 34}px`}}>
                    <div id="sectionHeading-L01B4NJB0TT-description" className="p-channel_sidebar__group-description">Press Cmd Shift K to find or create a direct message. Press delete to remove a direct message from the sidebar</div>
                </div>                
                {directMessages}
                <div aria-level="2" className="p-channel_sidebar__static_list__item c-virtual_list__item" tabIndex="-1" role="treeitem" id="addMoreDM" data-qa="virtual-list-item" style={{top: `${this.props.hivesLength+34+(this.props.hives.length)*34}px`}}>
                    <div className="p-channel_sidebar__close_container">
                        <button className="c-button-unstyled p-channel_sidebar__link p-channel_sidebar__link--dim p-channel_sidebar__link--add-more-items" role="presentation" data-sidebar-link-id="Vadd_more_items_dm" data-qa-channel-sidebar-link-id="Vadd_more_items_dm" tabIndex="-1" type="button">
                            <i className="c-icon p-channel_sidebar__channel_icon_prefix p-channel_sidebar__channel_icon_prefix--comfy c-icon--plus-small c-icon--inherit c-icon--inline" data-qa="sidebar-channel-icon-prefix" type="plus-small" aria-hidden="true"></i>
                            <span className="p-channel_sidebar__name" data-qa="channel_sidebar_name_sidebar_add_more_dm">Add Conversations</span>
                        </button>
                    </div>
                </div>
            </>
        )
    }
};

export default HiveIndex;



//                               <div aria-level="2" aria-setsize="7" aria-posinset="2" className="p-channel_sidebar__static_list__item c-virtual_list__item" tabIndex="-1" role="treeitem" id="G01HFKB0B6G" data-qa="virtual-list-item" style="top: 580px;">
//                                  <div className="p-channel_sidebar__close_container" data-qa="channel_item_container">
//                                     <a data-user-count="3" data-section-channel-index="1" data-qa-channel-sidebar-channel="true" data-qa-channel-sidebar-channel-is-selected="false" data-qa-channel-sidebar-channel-is-muted="false" data-qa-channel-sidebar-channel-id="G01HFKB0B6G" data-qa-channel-sidebar-channel-type="mpim" data-qa-channel-sidebar-is-starred="false" data-qa-channel-sidebar-is-you="false" tabIndex="-1" role="presentation" className="c-link p-channel_sidebar__channel p-channel_sidebar__channel--mpim p-channel_sidebar__channel--show_more_feature p-channel_sidebar__channel--comfy" href="https://app-academy.slack.com/archives/G01HFKB0B6G" draggable="true">
//                                        <i className="c-icon p-channel_sidebar__edit_mode_checkbox p-channel_sidebar__edit_mode_checkbox--not_editing c-icon--real-checkbox-empty c-icon--inherit c-icon--inline" data-qa="edit-mode-checkbox-state" type="real-checkbox-empty" aria-hidden="true"></i>
//                                        <div className="p-channel_sidebar__mpim_avatars">
//                                           <span className="p-channel_sidebar__mpim_avatars_mpim1 c-avatar" data-qa="channel-prefix-mpim-avatar" style="height: 14px; width: 14px;"><img src="https://ca.slack-edge.com/T03GU501J-U01AJHGM12P-b84974b5e452-24" srcset="https://ca.slack-edge.com/T03GU501J-U01AJHGM12P-b84974b5e452-32 2x" className="c-base_icon c-base_icon--image" aria-hidden="true" role="img" alt="" style="height: 14px; width: 14px;"></span>
//                                           <div className="p-channel_sidebar__mpim_counter" data-qa="channel-prefix-mpim-counter">
//                                              <div aria-hidden="true" className="p-channel_sidebar__mpim_counter_inner">3</div>
//                                           </div>
//                                        </div>
//                                        <span dir="auto" className="p-channel_sidebar__name" data-qa="channel_sidebar_name_julian-tipler,-justin-lee,-niko-wells" aria-label="" delay="300" data-sk="tooltip_parent"><span>Julian Tipler</span>, <span>Justin Lee</span>, <span>Niko Wells</span></span>
//                                     </a>
//                                     <button className="c-button-unstyled p-channel_sidebar__close" data-qa="channel_item_close" aria-hidden="true" tabIndex="-1" type="button"><i className="c-deprecated-icon c-icon--times" type="times" aria-hidden="true"></i></button>
//                                  </div>
//                               </div>
//                               <div aria-level="2" aria-setsize="7" aria-posinset="3" className="p-channel_sidebar__static_list__item c-virtual_list__item" tabIndex="-1" role="treeitem" id="D01C280M82C" data-qa="virtual-list-item" style="top: 608px;">
//                                  <div className="p-channel_sidebar__close_container" data-qa="channel_item_container">
//                                     <a data-user-count="0" data-section-channel-index="2" data-qa-channel-sidebar-channel="true" data-qa-channel-sidebar-channel-is-selected="false" data-qa-channel-sidebar-channel-is-muted="false" data-qa-channel-sidebar-channel-id="D01C280M82C" data-qa-channel-sidebar-channel-type="im" data-qa-channel-sidebar-is-starred="false" data-qa-channel-sidebar-is-you="false" tabIndex="-1" role="presentation" className="c-link p-channel_sidebar__channel p-channel_sidebar__channel--show_more_feature p-channel_sidebar__channel--comfy" href="https://app-academy.slack.com/archives/D01C280M82C" draggable="true" data-qa-channel-sidebar-priority="0">
//                                        <i className="c-icon p-channel_sidebar__edit_mode_checkbox p-channel_sidebar__edit_mode_checkbox--not_editing c-icon--real-checkbox-empty c-icon--inherit c-icon--inline" data-qa="edit-mode-checkbox-state" type="real-checkbox-empty" aria-hidden="true"></i>
//                                        <div className="p-channel_sidebar__user_avatar" data-qa-hidden-presence="0">
//                                           <span className="c-avatar" data-qa="channel-prefix-im-avatar" style="height: 20px; width: 20px;"><img src="https://ca.slack-edge.com/T03GU501J-U019Z4U0VJ9-g9617d83228e-24" srcset="https://ca.slack-edge.com/T03GU501J-U019Z4U0VJ9-g9617d83228e-48 2x" className="c-base_icon c-base_icon--image" aria-hidden="true" role="img" alt="" style="height: 20px; width: 20px;"></span>
//                                           <div className="p-channel_sidebar__user_avatar_presence_bg"></div>
//                                           <i className="c-icon p-channel_sidebar__presence_icon p-channel_sidebar__presence_icon--dim_enabled p-channel_sidebar__presence_icon--on-avatar p-channel_sidebar__presence_icon--on-avatar-border c-presence c-presence--active c-icon--presence-online" type="presence-online" title="Active" aria-hidden="true" data-qa="presence_indicator" data-qa-presence-self="false" data-qa-presence-active="true" data-qa-presence-dnd="false"></i><i className="c-icon p-channel_sidebar__presence_icon p-channel_sidebar__presence_icon--dim_enabled p-channel_sidebar__presence_icon--on-avatar c-presence c-presence--active c-icon--presence-online" type="presence-online" title="Active" aria-hidden="true" data-qa="presence_indicator" data-qa-presence-self="false" data-qa-presence-active="true" data-qa-presence-dnd="false"></i>
//                                        </div>
//                                        <span dir="auto" className="p-channel_sidebar__name" data-qa="channel_sidebar_name_justin-lee" aria-label="" delay="300" data-sk="tooltip_parent"><span>Justin Lee</span></span>
//                                     </a>
//                                     <button className="c-button-unstyled p-channel_sidebar__close" data-qa="channel_item_close" aria-hidden="true" tabIndex="-1" type="button"><i className="c-deprecated-icon c-icon--times" type="times" aria-hidden="true"></i></button>
//                                  </div>
//                               </div>
//                               <div aria-level="2" aria-setsize="7" aria-posinset="4" className="p-channel_sidebar__static_list__item c-virtual_list__item" tabIndex="-1" role="treeitem" id="D01HPK30XHU" data-qa="virtual-list-item" style="top: 636px;">
//                                  <div className="p-channel_sidebar__close_container" data-qa="channel_item_container">
//                                     <a data-user-count="0" data-section-channel-index="3" data-qa-channel-sidebar-channel="true" data-qa-channel-sidebar-channel-is-selected="false" data-qa-channel-sidebar-channel-is-muted="false" data-qa-channel-sidebar-channel-id="D01HPK30XHU" data-qa-channel-sidebar-channel-type="im" data-qa-channel-sidebar-is-starred="false" data-qa-channel-sidebar-is-you="false" tabIndex="-1" role="presentation" className="c-link p-channel_sidebar__channel p-channel_sidebar__channel--show_more_feature p-channel_sidebar__channel--comfy" href="https://app-academy.slack.com/archives/D01HPK30XHU" draggable="true" data-qa-channel-sidebar-priority="0">
//                                        <i className="c-icon p-channel_sidebar__edit_mode_checkbox p-channel_sidebar__edit_mode_checkbox--not_editing c-icon--real-checkbox-empty c-icon--inherit c-icon--inline" data-qa="edit-mode-checkbox-state" type="real-checkbox-empty" aria-hidden="true"></i>
//                                        <div className="p-channel_sidebar__user_avatar" data-qa-hidden-presence="0">
//                                           <span className="c-avatar" data-qa="channel-prefix-im-avatar" style="height: 20px; width: 20px;"><img src="https://ca.slack-edge.com/T03GU501J-U01B0N463CL-53fcd0325557-24" srcset="https://ca.slack-edge.com/T03GU501J-U01B0N463CL-53fcd0325557-48 2x" className="c-base_icon c-base_icon--image" aria-hidden="true" role="img" alt="" style="height: 20px; width: 20px;"></span>
//                                           <div className="p-channel_sidebar__user_avatar_presence_bg"></div>
//                                           <i className="c-icon p-channel_sidebar__presence_icon p-channel_sidebar__presence_icon--dim_enabled p-channel_sidebar__presence_icon--on-avatar p-channel_sidebar__presence_icon--on-avatar-border c-presence c-presence--away c-icon--presence-offline" type="presence-offline" title="Away" aria-hidden="true" data-qa="presence_indicator" data-qa-presence-self="false" data-qa-presence-active="false" data-qa-presence-dnd="false"></i><i className="c-icon p-channel_sidebar__presence_icon p-channel_sidebar__presence_icon--dim_enabled p-channel_sidebar__presence_icon--on-avatar c-presence c-presence--away c-icon--presence-offline" type="presence-offline" title="Away" aria-hidden="true" data-qa="presence_indicator" data-qa-presence-self="false" data-qa-presence-active="false" data-qa-presence-dnd="false"></i>
//                                        </div>
//                                        <span dir="auto" className="p-channel_sidebar__name p-channel_sidebar__name--away" data-qa="channel_sidebar_name_niko-wells" aria-label="" delay="300" data-sk="tooltip_parent"><span>Niko Wells</span></span>
//                                     </a>
//                                     <button className="c-button-unstyled p-channel_sidebar__close" data-qa="channel_item_close" aria-hidden="true" tabIndex="-1" type="button"><i className="c-deprecated-icon c-icon--times" type="times" aria-hidden="true"></i></button>
//                                  </div>
//                               </div>
//                               <div aria-level="2" aria-setsize="7" aria-posinset="5" className="p-channel_sidebar__static_list__item c-virtual_list__item" tabIndex="-1" role="treeitem" id="D01DXNZU0A3" data-qa="virtual-list-item" style="top: 664px;">
//                                  <div className="p-channel_sidebar__close_container" data-qa="channel_item_container">
//                                     <a data-user-count="0" data-section-channel-index="4" data-qa-channel-sidebar-channel="true" data-qa-channel-sidebar-channel-is-selected="false" data-qa-channel-sidebar-channel-is-muted="false" data-qa-channel-sidebar-channel-id="D01DXNZU0A3" data-qa-channel-sidebar-channel-type="im" data-qa-channel-sidebar-is-starred="false" data-qa-channel-sidebar-is-you="false" tabIndex="-1" role="presentation" className="c-link p-channel_sidebar__channel p-channel_sidebar__channel--show_more_feature p-channel_sidebar__channel--comfy" href="https://app-academy.slack.com/archives/D01DXNZU0A3" draggable="true" data-qa-channel-sidebar-priority="0">
//                                        <i className="c-icon p-channel_sidebar__edit_mode_checkbox p-channel_sidebar__edit_mode_checkbox--not_editing c-icon--real-checkbox-empty c-icon--inherit c-icon--inline" data-qa="edit-mode-checkbox-state" type="real-checkbox-empty" aria-hidden="true"></i>
//                                        <div className="p-channel_sidebar__user_avatar" data-qa-hidden-presence="0">
//                                           <span className="c-avatar" data-qa="channel-prefix-im-avatar" style="height: 20px; width: 20px;"><img src="https://ca.slack-edge.com/T03GU501J-U01AERMM62D-4f4aede6ba88-24" srcset="https://ca.slack-edge.com/T03GU501J-U01AERMM62D-4f4aede6ba88-48 2x" className="c-base_icon c-base_icon--image" aria-hidden="true" role="img" alt="" style="height: 20px; width: 20px;"></span>
//                                           <div className="p-channel_sidebar__user_avatar_presence_bg"></div>
//                                           <i className="c-icon p-channel_sidebar__presence_icon p-channel_sidebar__presence_icon--dim_enabled p-channel_sidebar__presence_icon--on-avatar p-channel_sidebar__presence_icon--on-avatar-border c-presence c-presence--active c-icon--presence-online" type="presence-online" title="Active" aria-hidden="true" data-qa="presence_indicator" data-qa-presence-self="false" data-qa-presence-active="true" data-qa-presence-dnd="false"></i><i className="c-icon p-channel_sidebar__presence_icon p-channel_sidebar__presence_icon--dim_enabled p-channel_sidebar__presence_icon--on-avatar c-presence c-presence--active c-icon--presence-online" type="presence-online" title="Active" aria-hidden="true" data-qa="presence_indicator" data-qa-presence-self="false" data-qa-presence-active="true" data-qa-presence-dnd="false"></i>
//                                        </div>
//                                        <span dir="auto" className="p-channel_sidebar__name" data-qa="channel_sidebar_name_rizza-marzo" aria-label="" delay="300" data-sk="tooltip_parent"><span className="c-custom_status" data-qa="custom_status" delay="150" data-sk="tooltip_parent"><span className="c-emoji c-emoji__small c-emoji--inline" data-qa="emoji"><img src="https://slack-imgs.com/?c=1&amp;o1=gu&amp;url=https%3A%2F%2Femoji.slack-edge.com%2FT03GU501J%2Fneko-sassy-fran%2F32427edd238b9fa3.png" aria-label="neko sassy fran emoji" alt=":neko-sassy-fran:" data-stringify-type="emoji" data-stringify-emoji=":neko-sassy-fran:"></span></span><span>Rizza Marzo</span></span>
//                                     </a>
//                                     <button className="c-button-unstyled p-channel_sidebar__close" data-qa="channel_item_close" aria-hidden="true" tabIndex="-1" type="button"><i className="c-deprecated-icon c-icon--times" type="times" aria-hidden="true"></i></button>
//                                  </div>
//                               </div>
//                               <div aria-level="2" aria-setsize="7" aria-posinset="6" className="p-channel_sidebar__static_list__item c-virtual_list__item" tabIndex="-1" role="treeitem" id="D01FN2ZAULW" data-qa="virtual-list-item" style="top: 692px;">
//                                  <div className="p-channel_sidebar__close_container" data-qa="channel_item_container">
//                                     <a data-user-count="0" data-section-channel-index="5" data-qa-channel-sidebar-channel="true" data-qa-channel-sidebar-channel-is-selected="false" data-qa-channel-sidebar-channel-is-muted="false" data-qa-channel-sidebar-channel-id="D01FN2ZAULW" data-qa-channel-sidebar-channel-type="im" data-qa-channel-sidebar-is-starred="false" data-qa-channel-sidebar-is-you="false" tabIndex="-1" role="presentation" className="c-link p-channel_sidebar__channel p-channel_sidebar__channel--show_more_feature p-channel_sidebar__channel--comfy" href="https://app-academy.slack.com/archives/D01FN2ZAULW" draggable="true" data-qa-channel-sidebar-priority="0">
//                                        <i className="c-icon p-channel_sidebar__edit_mode_checkbox p-channel_sidebar__edit_mode_checkbox--not_editing c-icon--real-checkbox-empty c-icon--inherit c-icon--inline" data-qa="edit-mode-checkbox-state" type="real-checkbox-empty" aria-hidden="true"></i>
//                                        <div className="p-channel_sidebar__user_avatar" data-qa-hidden-presence="0">
//                                           <span className="c-avatar" data-qa="channel-prefix-im-avatar" style="height: 20px; width: 20px;"><img src="https://ca.slack-edge.com/T03GU501J-UJCNB6ELF-c2f195617fbd-24" srcset="https://ca.slack-edge.com/T03GU501J-UJCNB6ELF-c2f195617fbd-48 2x" className="c-base_icon c-base_icon--image" aria-hidden="true" role="img" alt="" style="height: 20px; width: 20px;"></span>
//                                           <div className="p-channel_sidebar__user_avatar_presence_bg"></div>
//                                           <i className="c-icon p-channel_sidebar__presence_icon p-channel_sidebar__presence_icon--dim_enabled p-channel_sidebar__presence_icon--on-avatar p-channel_sidebar__presence_icon--on-avatar-border c-presence c-presence--active c-icon--presence-online" type="presence-online" title="Active" aria-hidden="true" data-qa="presence_indicator" data-qa-presence-self="false" data-qa-presence-active="true" data-qa-presence-dnd="false"></i><i className="c-icon p-channel_sidebar__presence_icon p-channel_sidebar__presence_icon--dim_enabled p-channel_sidebar__presence_icon--on-avatar c-presence c-presence--active c-icon--presence-online" type="presence-online" title="Active" aria-hidden="true" data-qa="presence_indicator" data-qa-presence-self="false" data-qa-presence-active="true" data-qa-presence-dnd="false"></i>
//                                        </div>
//                                        <span dir="auto" className="p-channel_sidebar__name" data-qa="channel_sidebar_name_walker" aria-label="" delay="300" data-sk="tooltip_parent"><span>Walker</span></span>
//                                     </a>
//                                     <button className="c-button-unstyled p-channel_sidebar__close" data-qa="channel_item_close" aria-hidden="true" tabIndex="-1" type="button"><i className="c-deprecated-icon c-icon--times" type="times" aria-hidden="true"></i></button>
//                                  </div>
//                               </div>
//                               <div aria-level="2" aria-setsize="7" aria-posinset="7" className="p-channel_sidebar__static_list__item c-virtual_list__item" tabIndex="-1" role="treeitem" id="D01DCJHDCRF" data-qa="virtual-list-item" style="top: 720px;">
//                                  <div className="p-channel_sidebar__close_container" data-qa="channel_item_container">
//                                     <a data-user-count="0" data-section-channel-index="6" data-qa-channel-sidebar-channel="true" data-qa-channel-sidebar-channel-is-selected="false" data-qa-channel-sidebar-channel-is-muted="false" data-qa-channel-sidebar-channel-id="D01DCJHDCRF" data-qa-channel-sidebar-channel-type="im" data-qa-channel-sidebar-is-starred="false" data-qa-channel-sidebar-is-you="false" tabIndex="-1" role="presentation" className="c-link p-channel_sidebar__channel p-channel_sidebar__channel--show_more_feature p-channel_sidebar__channel--comfy" href="https://app-academy.slack.com/archives/D01DCJHDCRF" draggable="true" data-qa-channel-sidebar-priority="0">
//                                        <i className="c-icon p-channel_sidebar__edit_mode_checkbox p-channel_sidebar__edit_mode_checkbox--not_editing c-icon--real-checkbox-empty c-icon--inherit c-icon--inline" data-qa="edit-mode-checkbox-state" type="real-checkbox-empty" aria-hidden="true"></i>
//                                        <div className="p-channel_sidebar__user_avatar" data-qa-hidden-presence="0">
//                                           <span className="c-avatar" data-qa="channel-prefix-im-avatar" style="height: 20px; width: 20px;"><img src="https://ca.slack-edge.com/T03GU501J-UR6JS6014-40fa64c89b74-24" srcset="https://ca.slack-edge.com/T03GU501J-UR6JS6014-40fa64c89b74-48 2x" className="c-base_icon c-base_icon--image" aria-hidden="true" role="img" alt="" style="height: 20px; width: 20px;"></span>
//                                           <div className="p-channel_sidebar__user_avatar_presence_bg"></div>
//                                           <i className="c-icon p-channel_sidebar__presence_icon p-channel_sidebar__presence_icon--dim_enabled p-channel_sidebar__presence_icon--on-avatar p-channel_sidebar__presence_icon--on-avatar-border c-presence c-presence--active c-icon--presence-online" type="presence-online" title="Active" aria-hidden="true" data-qa="presence_indicator" data-qa-presence-self="false" data-qa-presence-active="true" data-qa-presence-dnd="false"></i><i className="c-icon p-channel_sidebar__presence_icon p-channel_sidebar__presence_icon--dim_enabled p-channel_sidebar__presence_icon--on-avatar c-presence c-presence--active c-icon--presence-online" type="presence-online" title="Active" aria-hidden="true" data-qa="presence_indicator" data-qa-presence-self="false" data-qa-presence-active="true" data-qa-presence-dnd="false"></i>
//                                        </div>
//                                        <span dir="auto" className="p-channel_sidebar__name" data-qa="channel_sidebar_name_will-wang" aria-label="" delay="300" data-sk="tooltip_parent"><span>Will Wang</span></span>
//                                     </a>
//                                     <button className="c-button-unstyled p-channel_sidebar__close" data-qa="channel_item_close" aria-hidden="true" tabIndex="-1" type="button"><i className="c-deprecated-icon c-icon--times" type="times" aria-hidden="true"></i></button>
//                                  </div>
//                               </div>




//                               <div aria-expanded="true" aria-level="1" aria-label="Recent Apps" aria-describedby="sectionHeading-L01AP1E2K4M-description channel-sections-reorder-description" aria-setsize="7" aria-posinset="7" className="p-channel_sidebar__static_list__item c-virtual_list__item" tabIndex="-1" role="treeitem" id="sectionHeading-L01AP1E2K4M" data-qa="virtual-list-item" style="top: 788px;">
//                                  <div className="p-channel_sidebar__section_heading p-channel_sidebar__drop_target_indicator p-channel_sidebar__section_heading--empty" data-qa-channel-sidebar-section-heading="recent_apps" data-qa="recent_apps" draggable="true">
//                                     <span role="presentation" className="p-channel_sidebar__section_heading_expand_container p-channel_sidebar__section_heading_expand_container--show_more_feature" aria-hidden="true"><i className="c-icon p-channel_sidebar__section_heading_expand p-channel_sidebar__section_heading_expand--show_more_feature c-icon--caret-right c-icon--inherit c-icon--inline" data-qa="channel-section-collapse" type="caret-right" aria-hidden="true"></i></span><button className="c-button-unstyled p-channel_sidebar__section_heading_label p-channel_sidebar__section_heading_label--clickable" data-qa="channel_sidebar__section_heading_label__recent_apps" tabIndex="-1" delay="300" data-sk="tooltip_parent" type="button"><span className="p-channel_sidebar__section_heading_label_overflow">Apps</span></button>
//                                     <div className="p-channel_sidebar__section_heading_right"><button className="c-button-unstyled p-channel_sidebar__section_heading_right_item p-channel_sidebar__section_heading_plus p-channel_sidebar__section_heading_plus--hover-reveal" aria-hidden="true" tabIndex="-1" data-qa="channel_sidebar__plus__recent_apps" delay="300" data-sk="tooltip_parent" type="button"></button></div>
//                                  </div>
//                               </div>
//                               <div aria-owns="addMoreApps" aria-label="Recent Apps" className="p-channel_sidebar__static_list__item c-virtual_list__item" tabIndex="-1" role="group" id="sectionHeadingAriaGroup-L01AP1E2K4M" data-qa="virtual-list-item" style="top: 824px;">
//                                  <div id="sectionHeading-L01AP1E2K4M-description" className="p-channel_sidebar__group-description">Press delete to remove messages from an app from the sidebar</div>
//                               </div>
//                               <div aria-level="2" className="p-channel_sidebar__static_list__item c-virtual_list__item" tabIndex="-1" role="treeitem" id="addMoreApps" data-qa="virtual-list-item" style="top: 824px;">
//                                  <div className="p-channel_sidebar__close_container"><button className="c-button-unstyled p-channel_sidebar__link p-channel_sidebar__link--dim p-channel_sidebar__link--add-more-items" role="presentation" data-sidebar-link-id="Vadd_more_items_app" data-qa-channel-sidebar-link-id="Vadd_more_items_app" tabIndex="-1" type="button"><i className="c-icon p-channel_sidebar__channel_icon_prefix p-channel_sidebar__channel_icon_prefix--comfy c-icon--plus-small c-icon--inherit c-icon--inline" data-qa="sidebar-channel-icon-prefix" type="plus-small" aria-hidden="true"></i><span className="p-channel_sidebar__name" data-qa="channel_sidebar_name_sidebar_add_more_app">Add apps</span></button></div>
//                               </div>
//                            </div>
//                         </div>
//                      </div>
//                      <div role="presentation" className="c-scrollbar__track">
//                         <div role="presentation" className="c-scrollbar__bar" tabIndex="-1" style="height: 777.373px; transform: translateY(0px);"></div>
//                      </div>
//                   </div>
//                </div>
//             </div>
//             <div className="resize-triggers">
//                <div className="expand-trigger">
//                   <div style="width: 261px; height: 843px;"></div>
//                </div>
//                <div className="contract-trigger"></div>
//             </div>
//          </div>
