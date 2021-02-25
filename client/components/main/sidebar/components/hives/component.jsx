import React from 'react';
import Item from './item';

class HiveIndex extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.props.fetchHives();
    }
    
    render() {
        const hives = this.props.hives.map((hive,idx) => (
            <Item
                key={idx}
                hive={hive}
                idx={idx}
            />
        ));

        return (
            <>
                <div aria-expanded="true" aria-level="1" aria-label="Channels" aria-describedby="sectionHeading-L01AY9NMGP6-description channel-sections-reorder-description" aria-setsize="7" aria-posinset="5" className="p-channel_sidebar__static_list__item c-virtual_list__item" tabIndex="-1" role="treeitem" id="sectionHeading-L01AY9NMGP6" data-qa="virtual-list-item" style={{top: "160px"}}>
                    <div className="p-channel_sidebar__section_heading p-channel_sidebar__drop_target_indicator p-channel_sidebar__section_heading--unreads" data-qa-channel-sidebar-section-heading="channels" data-qa="channels" draggable="true">
                        <span role="presentation" className="p-channel_sidebar__section_heading_expand_container p-channel_sidebar__section_heading_expand_container--show_more_feature" aria-hidden="true">
                            <i className="c-icon p-channel_sidebar__section_heading_expand p-channel_sidebar__section_heading_expand--show_more_feature c-icon--caret-right c-icon--inherit c-icon--inline" data-qa="channel-section-collapse" type="caret-right" aria-hidden="true"></i>
                        </span>
                        <button className="c-button-unstyled p-channel_sidebar__section_heading_label p-channel_sidebar__section_heading_label--clickable" data-qa="channel_sidebar__section_heading_label__channels" tabIndex="-1" delay="300" data-sk="tooltip_parent" type="button">
                            <span className="p-channel_sidebar__section_heading_label_overflow">Hives:</span>
                        </button>
                        <div className="p-channel_sidebar__section_heading_right">
                            <button className="c-button-unstyled p-channel_sidebar__section_heading_right_item p-channel_sidebar__section_heading_plus p-channel_sidebar__section_heading_plus--hover-reveal" aria-hidden="true" tabIndex="-1" data-qa="channel_sidebar__plus__channels" delay="300" data-sk="tooltip_parent" type="button" onClick={this.props.hiveModal}></button>
                        </div>
                    </div>
                </div>
                <div aria-owns="C01C0RCLNH1 G01FRNYFWSH CS7KHRL7L C27CHRZ7A C01BVLSN11R C03GU502Q C03GUB0T3 C04DM01AR CJ0RTNMM4 C0134L4B6ES addMoreChannels" aria-label="Channels" className="p-channel_sidebar__static_list__item c-virtual_list__item" tabIndex="-1" role="group" id="sectionHeadingAriaGroup-L01AY9NMGP6" data-qa="virtual-list-item" style={{top: "196px"}}>
                    <div id="sectionHeading-L01AY9NMGP6-description" className="p-channel_sidebar__group-description">Press Cmd Shift L to find or create a channel</div>
                </div>
                {hives}
                <div aria-level="2" className="p-channel_sidebar__static_list__item c-virtual_list__item" tabIndex="-1" role="treeitem" id="addMoreChannels" data-qa="virtual-list-item" style={{top: `${196+(this.props.hives.length)*28}px`}}>
                    <div className="p-channel_sidebar__close_container">
                        <button className="c-button-unstyled p-channel_sidebar__link p-channel_sidebar__link--dim p-channel_sidebar__link--add-more-items" role="presentation" data-sidebar-link-id="Vadd_more_items_channel" data-qa-channel-sidebar-link-id="Vadd_more_items_channel" tabIndex="-1" type="button" onClick={this.props.hiveModal}>
                            <i className="c-icon p-channel_sidebar__channel_icon_prefix p-channel_sidebar__channel_icon_prefix--comfy c-icon--plus-small c-icon--inherit c-icon--inline" data-qa="sidebar-channel-icon-prefix" type="plus-small" aria-hidden="true"></i>
                            <span className="p-channel_sidebar__name" data-qa="channel_sidebar_name_sidebar_add_more_channel">Add Hives</span>
                        </button>
                    </div>
                </div>
            </>
        )
    }
};

export default HiveIndex;