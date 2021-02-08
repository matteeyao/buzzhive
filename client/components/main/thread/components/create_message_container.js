import { connect } from 'react-redux';
import { withRouter } from "react-router-dom"
import { createMessage } from "../../../../actions/message_actions";
import MessageForm from './message_form';

const mapStateToProps = (state, ownProps) => {
    return ({
        message: {
            body: "",
            author_id: state.session.currentUserId,
            parent_message_id: null,
            msgeable_id: ownProps.match.params.hiveId,
            msgeable_type: "Hive"
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
    connect(mapStateToProps, mapDispatchToProps)(MessageForm)
);
