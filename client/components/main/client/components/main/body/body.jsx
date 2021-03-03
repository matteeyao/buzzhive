import React from 'react';
import Message from './item';

export default ({currentHive, messages, users, fetchMessage}) => {
    const [dimensions, setDimensions] = React.useState({ 
        height: window.innerHeight,
        width: window.innerWidth,
    })

    React.useEffect(() => {
        function handleResize() {
            setDimensions({
                height: window.innerHeight,
                width: window.innerWidth,
            });
        };

        window.addEventListener('resize', handleResize);
    })

    const messageBlocks = messages.map((message, idx) => (
        <Message
            key={idx}
            message={message}
            author={users[message.authorId]}
            hiveid = {currentHive.id}
            fetchMessage={fetchMessage}
        />
    ));

    return (
        <div className="p-workspace__primary_view_body">
            <div className="p-message_pane p-message_pane--classic-nav" data-qa="message_pane">
                <div className="p-message_pane__top_banners"></div>
                <div style={{overflow: "auto", height: "auto"}}>
                    <div role="presentation">
                        <div tabIndex="0" style={{position: "absolute", width: "1px", height: "1px", outline: "none", boxShadow: "none", top: "0px", }}></div>
                        <div role="list" aria-label={currentHive.name+" (channel)"} className="c-virtual_list c-virtual_list--scrollbar c-message_list c-message_list--dark c-scrollbar c-scrollbar--fade" style={{width: `${(dimensions.width)*.45}px`, minHeight: `${(dimensions.height)}px`}}>
                            <div data-qa="slack_kit_scrollbar" role="presentation" className="c-scrollbar__hider">
                                <div role="presentation" className="c-scrollbar__child" style={{width: `${(dimensions.width)*.45}px`, height: "100%", marginTop: '10px'}}>
                                    <div data-qa="slack_kit_list" className="c-virtual_list__scroll_container" role="presentation" style={{position: "relative", height: "100%"}}>
                                        <ul style={{paddingTop: "10px"}}>
                                            {messageBlocks}
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="resize-triggers">
                    <div className="expand-trigger">
                        <div style={{width: `${(dimensions.width)*.45}px`, height: "655px"}}></div>
                    </div>
                    <div className="contract-trigger"></div>
                </div>
            </div>
        </div>
    );
};