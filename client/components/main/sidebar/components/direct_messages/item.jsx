import React from 'react';
import { withRouter } from 'react-router-dom';

class Item extends React.Component {
    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        const hiveId = this.props.hive.id;
        this.props.history.push(`/hives/${hiveId}`);
    }

    render() {
        const name = this.props.idx == 0 ? "Jane Doe" : "John Doe"
        const pic = this.props.idx == 0 ? "https://lh3.ggpht.com/zfXLEYjCcn-peZoNQpwfqYTg-KtFuzs80Twae8obhfL_HS4ydGsJ1EUHIoKcyhLw8Pk=s180" : "https://a.slack-edge.com/80588/marketing/img/meta/slack_hash_256.png";

        return (
            <div aria-level="2" aria-setsize="7" aria-posinset="1" className="p-channel_sidebar__static_list__item c-virtual_list__item" tabIndex="-1" role="treeitem" id="D01C9HZ0Q0L" data-qa="virtual-list-item" style={{top: `${this.props.startPos+this.props.idx*34}px`}}>
                <div className="p-channel_sidebar__close_container" data-qa="channel_item_container">
                <a data-user-count="0" data-section-channel-index="0" data-qa-channel-sidebar-channel="true" data-qa-channel-sidebar-channel-is-selected="false" data-qa-channel-sidebar-channel-is-muted="false" data-qa-channel-sidebar-channel-id="D01C9HZ0Q0L" data-qa-channel-sidebar-channel-type="im" data-qa-channel-sidebar-is-starred="false" data-qa-channel-sidebar-is-you="false" tabIndex="-1" role="presentation" className="c-link p-channel_sidebar__channel p-channel_sidebar__channel--show_more_feature p-channel_sidebar__channel--comfy" /* href="" */ draggable="true" data-qa-channel-sidebar-priority="0">
                    <i className="c-icon p-channel_sidebar__edit_mode_checkbox p-channel_sidebar__edit_mode_checkbox--not_editing c-icon--real-checkbox-empty c-icon--inherit c-icon--inline" data-qa="edit-mode-checkbox-state" type="real-checkbox-empty" aria-hidden="true"></i>
                    <div className="p-channel_sidebar__user_avatar" data-qa-hidden-presence="0">
                        <span className="c-avatar" data-qa="channel-prefix-im-avatar" style={{height: "20px", width: "20px"}}>
                            <img src={pic} srcSet={`${pic}`} className="c-base_icon c-base_icon--image" aria-hidden="true" role="img" alt="" style={{height: "20px", width: "20px"}} />
                        </span>
                        <div className="p-channel_sidebar__user_avatar_presence_bg"></div>
                        <i className="c-icon p-channel_sidebar__presence_icon p-channel_sidebar__presence_icon--dim_enabled p-channel_sidebar__presence_icon--on-avatar p-channel_sidebar__presence_icon--on-avatar-border c-presence c-presence--away c-icon--presence-offline" type="presence-offline" title="Away" aria-hidden="true" data-qa="presence_indicator" data-qa-presence-self="false" data-qa-presence-active="false" data-qa-presence-dnd="false"></i>
                        <i className="c-icon p-channel_sidebar__presence_icon p-channel_sidebar__presence_icon--dim_enabled p-channel_sidebar__presence_icon--on-avatar c-presence c-presence--away c-icon--presence-offline" type="presence-offline" title="Away" aria-hidden="true" data-qa="presence_indicator" data-qa-presence-self="false" data-qa-presence-active="false" data-qa-presence-dnd="false"></i>
                    </div>
                    <span dir="auto" className="p-channel_sidebar__name p-channel_sidebar__name--away" data-qa="channel_sidebar_name_julian-tipler" aria-label="" delay="300" data-sk="tooltip_parent"><span>{name}</span></span>
                </a>
                <button className="c-button-unstyled p-channel_sidebar__close" data-qa="channel_item_close" aria-hidden="true" tabIndex="-1" type="button"><i className="c-deprecated-icon c-icon--times" type="times" aria-hidden="true"></i></button>
                </div>
            </div>
        );
    }
}

export default withRouter(Item);
