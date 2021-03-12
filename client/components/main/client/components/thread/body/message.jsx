import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import ReplyForm from "./form";

const Message = ({currentHive, currentThread, message, hiveUsers, currentUser, action}) => {
    
    const [ reply, setReply ] = useState(false);
    
    const author = hiveUsers[message.authorId];

    const nestedMessages = (message.children || []).map(message => {
        return <Message key={message.id} currentHive={currentHive} currentThread={currentThread} message={message} hiveUsers={hiveUsers} currentUser={currentUser} action={action} type="child" />
    })

    const replyForm = reply ? <ReplyForm 
        currentHive={currentHive}
        currentThread={currentThread}
        message={message}
        currentUser={currentUser}
        hiveUsers={hiveUsers}
        action={action}
        closeForm={()=>setReply(false)
    } /> : null;

    return (
        <div className="thread-blocks" style={{marginLeft: "60px", marginTop: "10px"}}>
            <div className="c-virtual_list__item" tabIndex="-1" role="listitem" data-qa="virtual-list-item" style={{position: "relative"}}>
                <div role="document" className="c-message_kit__background c-message_kit__message c-message_kit__thread_message c-message_kit__thread_message--root" data-qa="message_container" data-qa-unprocessed="false" data-qa-placeholder="false">
                    <div role="document" className="c-message_kit__hover" data-qa-hover="true">
                        <div className="c-message_kit__actions c-message_kit__actions--inside" style={{position: "relative"}}>
                            <div className="c-message_kit__labels__offscreen_message" aria-live="assertive"></div>
                            <div className="c-message_kit__gutter">
                                <div className="c-message_kit__gutter__left">
                                    <button className="c-button-unstyled c-message_kit__avatar c-avatar c-avatar--interactive " aria-hidden="true" aria-label="View Joshua Dore’s Profile" tabIndex="-1" aria-haspopup="menu" aria-expanded="false" type="button" style={{height: "36px", width: "36px"}}>
                                        <img src="https://ca.slack-edge.com/T2J65A5T9-U79F6BVFF-ge96b0600bd0-48" srcSet="https://ca.slack-edge.com/T2J65A5T9-U79F6BVFF-ge96b0600bd0-48 2x" className="c-base_icon c-base_icon--image" aria-hidden="true" role="img" alt="" style={{height: "36px", width: "36px"}} />
                                    </button>
                                </div>
                                <div className="c-message_kit__gutter__right" data-qa="message_content">
                                    <span className="c-message__sender c-message_kit__sender" data-qa="message_sender" data-stringify-type="replace">
                                        <p rel="noopener noreferrer" data-message-sender="U019JPB15B7" data-qa="message_sender_name" aria-haspopup="menu" aria-expanded="false" className="c-link c-message__sender_link " style={{fontWeight: "900", color: "#d1d2d3"}}>
                                            {author.username} ({author.fname} {author.lname})
                                        </p>
                                    </span>
                                    &nbsp;
                                    <span data-stringify-type="replace" data-stringify-requires-siblings="true" data-ts="1612043729.007300" delay="300" data-sk="tooltip_parent" className="c-link c-timestamp" style={{fontSize: "14px"}}>
                                        <span className="c-timestamp__label">replied:</span>
                                    </span><br />
                                    <div className="c-message_kit__blocks c-message_kit__blocks--rich_text">
                                        <div className="c-message__message_blocks c-message__message_blocks--rich_text">
                                            <div className="p-block_kit_renderer" data-qa="block-kit-renderer">
                                                <div className="p-block_kit_renderer__block_wrapper p-block_kit_renderer__block_wrapper--first">
                                                <div className="p-rich_text_block" dir="auto">
                                                    <div className="p-rich_text_section">{message.body} <br /><br /></div>
                                                </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <button className="c-button-unstyled p-thread__reply_pin" aria-label="Show items pinned in channel general" aria-expanded="false" delay="150" data-sk="tooltip_parent" type="button" onClick={ () => { setReply(!reply) } }>
                                        <FontAwesomeIcon icon="reply" className="c-icon c-icon--reply c-icon--inherit c-icon--inline" style={{width: "15px", height: "15px"}}/>
                                        &nbsp;  Reply
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {replyForm}
            {nestedMessages}
        </div>
    )
};

export default Message;
