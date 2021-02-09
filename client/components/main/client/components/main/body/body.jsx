import React from 'react';
import Message from './item';

export default ({currentHive, messages, users}) => {
    const messageBlocks = messages.map((message, idx) => (
        <Message
            key={idx}
            prevTime={messages[message.id - 1].createdAt}
            message={message}
            author={users[message.authorId]}
        />
    ));

    return (
        <div className="p-workspace__primary_view_body">
            <div className="p-message_pane p-message_pane--classic-nav" data-qa="message_pane">
                <div className="p-message_pane__top_banners"></div>
                <div style={{overflow: "visible", height: "0px", width: "0px"}}>
                    <div role="presentation">
                        <div tabIndex="0" style={{position: "absolute", width: "1px", height: "1px", outline: "none", boxShadow: "none", top: "0px"}}></div>
                        <div role="list" aria-label={currentHive.name+" (channel)"} className="c-virtual_list c-virtual_list--scrollbar c-message_list c-message_list--dark c-scrollbar c-scrollbar--fade" style={{width: `${(window.innerWidth)*.45}px`, height: "654px"}}>
                            <div data-qa="slack_kit_scrollbar" role="presentation" className="c-scrollbar__hider">
                                <div role="presentation" className="c-scrollbar__child" style={{width: `${(window.innerWidth)*.45}px`}}>
                                    <div data-qa="slack_kit_list" className="c-virtual_list__scroll_container" role="presentation" style={{position: "relative", height: "2000px"}}>
                                        {messageBlocks}
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div tabIndex="0" style={{position: "absolute", width: "1px", height: "1px", outline: "none", boxShadow: "none", top: "0px"}}></div>
                    </div>
                </div>
                <div className="resize-triggers">
                    <div className="expand-trigger">
                        <div style={{width: `${(window.innerWidth)*.45}px`, height: "655px"}}></div>
                    </div>
                    <div className="contract-trigger"></div>
                </div>
            </div>
        </div>
    );
};
