import React from "react";
import Header from "./components/main/header";
import Body from "./components/main/body/body";
import Footer from "./components/main/footer/footer_container";

import ThreadHeader from "./components/thread/header";
import ThreadBody from "./components/thread/component";
// import MessageFormContainer from "./components/create_message_container";
import WebSocketContainer from "./components/websocket_container";

class Channel extends React.Component {
    constructor(props) {
        super(props);
        this.bottom = React.createRef();
    }

    componentDidMount() {
        this.props.fetchHive(this.props.match.params.hiveId);
        this.props.fetchMessages(this.props.match.params.hiveId);
        this.bottom.current.scrollIntoView();
    }

    componentDidUpdate(prevProps) {
        if (prevProps.match.params.hiveId !== this.props.match.params.hiveId) {
            this.props.fetchHive(this.props.match.params.hiveId)
            this.props.fetchMessages(this.props.match.params.hiveId);
        }
        this.bottom.current.scrollIntoView();
    }

    render() {
        const { currentHive, messages, users, fetchMessage } = this.props;
        return (
            <>
                <div role="main" aria-label="Channel general" className="p-workspace__primary_view" >
                    <div className="p-workspace__primary_view_contents">
                        <Header
                            currentHive={currentHive}
                            users={users}
                        />
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
                        </div>
                    </div>
                </div>
                <div className="p-workspace__secondary_view p-workspace__secondary_view--large">
                    <div className="p-workspace__secondary_view_contents">
                        <div role="complementary" className="p-flexpane p-flexpane--iap1">
                            <ThreadHeader
                                currentHive={currentHive}
                            />
                            <ThreadBody />
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
