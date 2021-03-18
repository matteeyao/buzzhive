import { connect } from 'react-redux';
import { withRouter } from "react-router-dom"
import { createMessage } from "../../../../../../actions/message_actions";
import Footer from './footer';

const mapStateToProps = (state, ownProps) => {
    return ({
        currentDirectMessage: state.entities.currentDirectMessage,
        message: {
            body: "",
            author_id: state.session.currentUser.id,
            parent_message_id: null,
            msgeable_id: ownProps.match.params.dmId,
            msgeable_type: "DirectMessage"
        },
        formType: 'Post Message',
    })
}

const mapDispatchToProps = dispatch => {
    return ({
        action: (messageForm) => dispatch(createMessage(messageForm)),
    })
}

export default withRouter(
    connect(mapStateToProps, mapDispatchToProps)(Footer)
);
