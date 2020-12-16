import React from "react";
import MessageFormContainer from "./create_message_form_container";

class ChannelShow extends React.Component {
    constructor(props) {
        super(props);
        this.bottom = React.createRef();
    }

    componentDidMount() {
        this.props.fetchHive(this.props.match.params.hiveId);
        // App.cable.subscriptions.create(
        //     { channel: "ChatChannel" },
        //     {
        //         received: data => {
        //             this.setState({
        //                 messages: this.state.messages.concat(data.message)
        //             });
        //         },
        //         speak: function (data) {
        //             return this.perform("speak", data);
        //         }
        //     }
        // );
    }

    componentDidUpdate(prevProps) {
        if (prevProps.match.params.hiveId !== this.props.match.params.hiveId) {
            this.props.fetchHive(this.props.match.params.hiveId)
        }
        // this.bottom.current.scrollIntoView();
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
                    <div ref={this.bottom} />
                </li>
            );
        });

        return (
            <div className="chatroom-container">
                <div>Channel</div>
                <div className="message-list">{messageList}</div>
                <br/>
                <div className="message-input"><MessageFormContainer /></div>
            </div>
        );
    }
}

export default ChannelShow;

// componentDidUpdate, when someone switches channels need to remount and fetch new information
// runs everytime props and state changes