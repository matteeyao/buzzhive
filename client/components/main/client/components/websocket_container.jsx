import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from "react-router-dom"
import { receiveMessage } from '../../../../actions/message_actions';

class WebSocket extends React.Component {
    constructor(props) {
        super(props);
        this.createSubscription = this.createSubscription.bind(this);
    };

    componentDidMount() {
        this.createSubscription();
    };

    // componentDidUpdate(prevProps) {
    //     this.createSubscription();
    // };

    createSubscription() {
        App.cable.subscriptions.create(
            { channel: "HivesChannel", id: this.props.currentHiveId }, 
            {
                connected: () => {},
                received: (data) => {
                    const message = data.message;
                    this.props.receiveMessage(message);
                },
                disconnected: () => {}
            }
        );
    };

    render() {
        return (<></>);
    }
}

const mapStateToProps = (state, ownProps) => {
    return {
        currentUser: state.entities.users[state.session.id],
        currentHiveId: ownProps.match.params.hiveId,
        messages: Object.values(state.entities.messages),
    };
};

const mapDispatchTopProps = dispatch => ({
    receiveMessage: message => dispatch(receiveMessage(message))
});

export default withRouter(
    connect(mapStateToProps, mapDispatchTopProps)(WebSocket)
);

// -----------------------------------------------------------------------------

// componentDidMount() {
//     if (this.props.currentUser) {
//         this.createSubscriptions();
//     }
// }

// componentDidUpdate(prevProps) {
//     if (prevProps && prevProps.currentChannel !== this.props.currentChannel) {
//         this.createSubscriptions();
//     }
// }

// componentWillUnmount() {
//     this.chats.forEach(channel => {
//         channel.unsubscribe();
//     })
// }

// createSubscriptions() {
//     let memberships = this.props.memberships;
//     this.chats = memberships.map(membership => (
//         App.cable.subscriptions.create({
//             channel: "ChatChannel",
//             room: membership.channelId
//         }, {
//             connected: () => {
//                 // console.log(`Connected to ${membership.channelId}`);
//             },
//             disconnected: () => {
//                 // console.log("Disconnected!");
//             },
//             received: (data) => {
//                 let payload = {
//                     messages: {
//                         [data.message.id]: data.message
//                     },
//                     user: {
//                         [data.user.id]: data.user
//                     }
//                 }
//                 this.props.receiveMessage(payload);
//             }
//         })
//     ));
// }

// -----------------------------------------------------------------------------

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