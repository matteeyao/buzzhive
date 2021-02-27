import { connect } from "react-redux";
import { fetchHive } from "../../../actions/hive_actions";
import { fetchMessages, fetchMessage, clearThread, createThreadReply } from "../../../actions/message_actions";
import Hive from "./channel";
import { withRouter } from "react-router-dom";

const mapStateToProps = (state) => {
    return {
        currentHive: state.entities.currentHive,
        currentThread: state.entities.currentThread,
        users: state.entities.users,
        messages: Object.values(state.entities.messages),
        currentUser: state.session.currentUser
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        fetchHive: (id) => dispatch(fetchHive(id)),
        fetchMessages: (id) => dispatch(fetchMessages(id)),
        fetchMessage: (hive_id, id) => dispatch(fetchMessage(hive_id, id)),
        clearThread: () => dispatch(clearThread()),
        action: (messageForm, hive_id, id) => dispatch(createThreadReply(messageForm, hive_id, id)),
    };
};

export default withRouter(
    connect(mapStateToProps, mapDispatchToProps)(Hive)
);
