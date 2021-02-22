import { connect } from 'react-redux';
import { withRouter } from "react-router-dom"
import { createMessage } from "../../../../../../actions/message_actions";
import Footer from './footer';

const mapStateToProps = (state, ownProps) => {
    return ({
        currentHive: state.entities.currentHive,
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
    connect(mapStateToProps, mapDispatchToProps)(Footer)
);
