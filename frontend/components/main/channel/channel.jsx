import React from "react";
import MessageFormContainer from "./components/create_message_container";
import WebSocketContainer from "./components/websocket_container";

class Channel extends React.Component {
    constructor(props) {
        super(props);
        this.bottom = React.createRef();
    }

    componentDidMount() {
        this.props.fetchHive(this.props.match.params.hiveId);
        this.bottom.current.scrollIntoView();
    }

    componentDidUpdate(prevProps) {
        if (prevProps.match.params.hiveId !== this.props.match.params.hiveId) {
            this.props.fetchHive(this.props.match.params.hiveId)
        }
        // debugger
        this.bottom.current.scrollIntoView();
    }

    render() {
        const { messages, users } = this.props;
        const messageList = messages.map(message => {
            return (
                <li key={message.id}>
                    <strong>{users[message.authorId].username}
                        (
                            {users[message.authorId].fname}
                            {users[message.authorId].lname}
                        )
                    </strong>
                    <div>{message.body}</div>
                </li>
            );
        });

        return (
            <div className="chatroom-container">
                <h2>Channel</h2>
                <div className="message-list">
                    {messageList}
                </div>
                <div ref={this.bottom} />
                <br/>
                <div className="message-input"><MessageFormContainer /></div>
                <WebSocketContainer />
            </div>
        );
    }
}

export default Channel;
