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
        const locked = this.props.hive.isPrivate ?
            <i className="c-icon p-channel_sidebar__channel_icon_prefix p-channel_sidebar__channel_icon_prefix--comfy c-icon--lock-o c-icon--inherit c-icon--inline" data-qa="sidebar-channel-icon-prefix" type="lock-o" aria-hidden="true"></i> :
            <i className="c-icon p-channel_sidebar__channel_icon_prefix p-channel_sidebar__channel_icon_prefix--comfy c-icon--channel-pane-hash c-icon--inherit c-icon--inline" data-qa="sidebar-channel-icon-prefix" type="channel-pane-hash" aria-hidden="true"></i>

        return (
            <div aria-level="2" aria-setsize="10" aria-posinset="1" className="p-channel_sidebar__static_list__item c-virtual_list__item" tabIndex="-1" role="treeitem" id="C01C0RCLNH1" data-qa="virtual-list-item" style={{top: `${196+28*this.props.idx}px`}}>
                <div data-user-count="0" data-section-channel-index="0" data-qa-channel-sidebar-channel="true" data-qa-channel-sidebar-channel-is-selected="false" data-qa-channel-sidebar-channel-is-muted="false" data-qa-channel-sidebar-channel-id="C01C0RCLNH1" data-qa-channel-sidebar-channel-type="channel" data-qa-channel-sidebar-is-starred="false" data-qa-channel-sidebar-is-you="false" tabIndex="-1" role="presentation" className="c-link p-channel_sidebar__channel p-channel_sidebar__channel--show_more_feature p-channel_sidebar__channel--comfy" onClick={this.handleClick} draggable="true">
                    <i className="c-icon p-channel_sidebar__edit_mode_checkbox p-channel_sidebar__edit_mode_checkbox--not_editing c-icon--real-checkbox-empty c-icon--inherit c-icon--inline" data-qa="edit-mode-checkbox-state" type="real-checkbox-empty" aria-hidden="true"></i>
                    {locked}
                    <span dir="auto" className="p-channel_sidebar__name" data-qa="channel_sidebar_name_20-09-michelle-circle" aria-label="" delay="300" data-sk="tooltip_parent">{this.props.hive.name}</span>
                </div>
            </div>
        );
    }
}

export default withRouter(Item);
