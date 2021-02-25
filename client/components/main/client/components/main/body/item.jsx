import React from 'react';
import * as DateUtil from '../../../../../../util/date_util';

export default ({message, author, hiveid, fetchMessage}) => {
    if (message && author) {
        return (
            <li className="message_block_container">
                <div className="c-virtual_list__sticky_container" role="presentation" style={{marginTop: "8px"}}>
                    <div aria-roledescription="separator" className="c-virtual_list__item--sticky c-virtual_list__item" tabIndex="-1" role="listitem" id="1611986400000.C2J4CK8N7" data-qa="virtual-list-item" style={{marginTop: "0px", zIndex: "199"}}>
                        <div className="c-message_list__day_divider__label c-message_list__day_divider__label--jump_to_date">
                            <button className="c-button-unstyled c-message_list__day_divider__label__pill" aria-label="Jump to date" aria-haspopup="menu" aria-expanded="false" type="button" style={{background: "rgba(47,50,55,1)"}}>
                                {DateUtil.formatDateTime(message.createdAt)}
                                <i className="c-icon c-message_list__day_divider__label__pill__arrow c-icon--chevron-down" type="chevron-down" aria-hidden="true"></i>
                            </button>
                        </div>
                    </div>
                </div>
                <div className="c-virtual_list__item" tabIndex="-1" role="presentation" id="1611986400000divider" data-qa="virtual-list-item" style={{marginTop: "17px"}}>
                    <div className="c-message_list__day_divider" data-stringify-ignore="true">
                        <div className="c-message_list__day_divider__line" data-stringify-ignore="true"></div>
                    </div>
                </div>
                <div aria-expanded="true" className="c-virtual_list__item c-virtual_clearfix" tabIndex="-1" role="listitem" id="1612043729.007300" data-qa="virtual-list-item" style={{margin: "0px", marginTop: "57px"}}>
                    <div role="document" className="c-message_kit__background p-message_pane_message__message c-message_kit__message" data-qa="message_container" data-qa-unprocessed="false" data-qa-placeholder="false">
                        <div role="document" className="c-message_kit__hover" data-qa-hover="true">
                            <div className="c-message_kit__actions c-message_kit__actions--default" style={{position: "relative"}}>
                                <div className="c-message_kit__labels__offscreen_message" aria-live="assertive"></div>
                                <div className="c-message_kit__gutter">
                                    <div className="c-message_kit__gutter__left" data-stringify-ignore="true">
                                        <button className="c-button-unstyled c-message_kit__avatar c-avatar c-avatar--interactive " aria-hidden="true" tabIndex="-1" aria-haspopup="menu" aria-expanded="false" type="button" style={{height: "36px", width: "36px"}}>
                                            <img src="https://ca.slack-edge.com/T2J65A5T9-U01GRFJHD50-g365b5ae771f-512" srcSet="https://ca.slack-edge.com/T2J65A5T9-U01GRFJHD50-g365b5ae771f-512 2x" className="c-base_icon c-base_icon--image" aria-hidden="true" role="img" alt="" style={{height: "36px", width: "36px"}} />
                                        </button>
                                    </div>
                                    <div className="c-message_kit__gutter__right" data-qa="message_content">
                                        <span className="c-message__sender c-message_kit__sender" data-qa="message_sender" data-stringify-type="replace">
                                            <a target="_blank" rel="noopener noreferrer" data-message-sender="U019JPB15B7" data-qa="message_sender_name" aria-haspopup="menu" aria-expanded="false" className="c-message__sender_link ">
                                                {author.username} ({author.fname} {author.lname})
                                                <span aria-label="(opens in new tab)"></span>
                                            </a>
                                        </span>
                                        &nbsp;&nbsp;
                                        <a data-stringify-type="replace" data-stringify-requires-siblings="true" data-ts="1612043729.007300" delay="300" data-sk="tooltip_parent" className="c-link c-timestamp">
                                            <span className="c-timestamp__label">{DateUtil.formatTime(message.createdAt)}</span>
                                        </a>
                                        <br />
                                        <div className="c-message_kit__blocks c-message_kit__blocks--rich_text">
                                            <div className="c-message__message_blocks c-message__message_blocks--rich_text">
                                                <div className="p-block_kit_renderer" data-qa="block-kit-renderer">
                                                    <div className="p-block_kit_renderer__block_wrapper p-block_kit_renderer__block_wrapper--first">
                                                        <div className="p-rich_text_block" dir="auto">
                                                            <div className="p-rich_text_section">
                                                                {message.body}
                                                                <br />
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div role="presentation" className="c-message__reply_bar c-message_kit__thread_replies" data-qa="reply_bar" data-stringify-ignore="true" onClick={()=>fetchMessage(hiveid,message.id)}>
                                            <button className="c-button-unstyled c-avatar c-avatar--interactive " aria-label="View Brandon Milhomme’s Profile" tabIndex="0" aria-haspopup="menu" aria-expanded="false" type="button" style={{height: "24px", width: "24px"}}>
                                                <div className="c-base_icon c-base_icon--image" style={{height: "24px", width: "24px", background: "none"}}><i className="far fa-comment-dots fa-2x" style={{fontSize: "24px"}}></i></div>
                                            </button>
                                            <div aria-expanded="true" aria-controls="C2J4CK8N7-1612043729.007300-thread-list" className="c-message__reply_count">
                                                View reply thread
                                            </div>
                                            <div className="c-message__reply_bar_description">
                                                <span className="c-message__reply_bar_view_thread">{DateUtil.formatDays(message.createdAt)} days ago</span>
                                            </div>
                                            <i className="c-deprecated-icon c-message__reply_bar_arrow c-icon--chevron-right c-deprecated-icon--vertical-align-baseline" type="chevron_right" aria-hidden="true"></i>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </li>
        );
    } else {
        return <></>;
    }
};
