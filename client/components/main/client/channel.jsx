import React from "react";
import Header from "./components/main/header";
import Body from "./components/main/body/body";
import Footer from "./components/main/footer/footer_container";
import Locked from "./components/main/locked/component";

import ThreadHeader from "./components/thread/header/header";
import ThreadBody from "./components/thread/body/component";
// import MessageFormContainer from "./components/create_message_container";
import WebSocketContainer from "./components/websocket_container";

class Channel extends React.Component {
    constructor(props) {
        super(props);
        this.bottom = React.createRef();
        this.state = {
            height: window.innerHeight,
            width: window.innerWidth,            
        }
    }

    componentDidMount() {
        this.props.fetchHive(this.props.match.params.hiveId);

        this.props.fetchMessages(this.props.match.params.hiveId);
        this.bottom.current.scrollIntoView();

        const handleResize = () => {
            this.setState({
                height: window.innerHeight,
                width: window.innerWidth,
            });
        };

        window.addEventListener('resize', handleResize);
    }

    componentDidUpdate(prevProps) {
        if (prevProps.match.params.hiveId !== this.props.match.params.hiveId) {
            this.props.clearThread();
            this.props.fetchHive(this.props.match.params.hiveId);

            this.props.fetchMessages(this.props.match.params.hiveId);
        }
        this.bottom.current.scrollIntoView();
    }

    render() {
        const { currentHive, currentThread, messages, users, currentUser, action, fetchMessage, closeThread, createHiveUser } = this.props;

        const locked = users[currentUser.id] ?
            <div className="p-file_drag_drop__container">
                <Body
                    currentHive={currentHive}
                    messages={messages}
                    users={users}
                    fetchMessage={fetchMessage}
                />
                <div ref={this.bottom} />
                <Footer 
                    currentHive={currentHive}
                />
                <WebSocketContainer />
            </div> :
            <div className="p-file_drag_drop__container">
                <Locked
                    currentHive={currentHive}
                    createHiveUser={createHiveUser}
                />
                <div ref={this.bottom} />
            </div>
                  
        return (
            <>
                <div role="main" aria-label="Channel general" className="p-workspace__primary_view" >
                    <div className="p-workspace__primary_view_contents">
                        <Header
                            currentHive={currentHive}
                            users={users}
                        />
                        {locked}
                        {/* <div className="p-file_drag_drop__container">
                            <Body
                                currentHive={currentHive}
                                messages={messages}
                                users={users}
                                fetchMessage={fetchMessage}
                            />
                            <div ref={this.bottom} />
                            <Footer 
                                currentHive={currentHive}
                            />
                            <WebSocketContainer />
                        </div> */}
                    </div>
                </div>
                <div className="p-workspace__secondary_view p-workspace__secondary_view--large">
                    <div className="p-workspace__secondary_view_contents">
                        <div role="complementary" className="p-flexpane p-flexpane--iap1">
                            <ThreadHeader
                                currentHive={currentHive}
                            />
                            <div className="p-flexpane__body p-threads_flexpane_container p-flexpane__body--dark">
                                <div className="p-file_drag_drop__container p-threads_flexpane">
                                    <div className="flex_one no_min_height">
                                        <div role="presentation" id="C2J4CK8N7-1612043729.007300-thread-list">
                                            <div tabIndex="0" style={{position: "absolute", width: "1px", height: "1px", outline: "none", boxShadow: "none", top: "0px"}}></div>
                                            <div role="list" aria-label="Thread in help-requests (channel)" className="c-virtual_list c-virtual_list--scrollbar c-scrollbar c-scrollbar--hidden" style={{width: "100%", minHeight: `${this.state.height}px`}}>
                                                <div data-qa="slack_kit_scrollbar" role="presentation" className="c-scrollbar__hider" style={{width: "100%"}} >
                                                    <div role="presentation" className="c-scrollbar__child" style={{width: "100%"}} >
                                                        <div data-qa="slack_kit_list" className="c-virtual_list__scroll_container" role="presentation" style={{position: "relative", minHeight: `${this.state.height}px`}}>
                                                            <ThreadBody 
                                                                currentHive={currentHive}
                                                                currentThread={currentThread}
                                                                users={users}
                                                                currentUser={currentUser}
                                                                action={action}
                                                                fetchMessage={fetchMessage}
                                                                closeThread={closeThread}                                               
                                                            />
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
                </div>
            </>
        );
    }
}

export default Channel;

// <div className="chatroom-container">
//     <h2>Channel</h2>
//     <div className="message-list">
//         {messageList}
//     </div>
//     <div ref={this.bottom} />
//     <br/>
//     <div className="message-input"><MessageFormContainer /></div>
//     <WebSocketContainer />
// </div>
