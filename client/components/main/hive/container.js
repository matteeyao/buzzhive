import { connect } from "react-redux";
import { fetchHive } from "../../../actions/hive_actions";
import { fetchMessages, fetchMessage, clearThread, createThreadReply } from "../../../actions/message_actions";
import { createHiveUser } from "../../../actions/hive_user_actions";
import { openModal } from "../../../actions/modal_actions";
import Channel from "./component";
import { withRouter } from "react-router-dom";

const mapStateToProps = (state) => {
    return {
        currentHive: state.entities.currentHive,
        currentThread: state.entities.currentThread,
        hiveUsers: state.entities.hiveUsers,
        messages: Object.values(state.entities.messages),
        currentUser: state.session.currentUser
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        fetchHive: (id) => dispatch(fetchHive(id)),
        fetchMessages: (data) => dispatch(fetchMessages(data)),
        fetchMessage: (hive_id, id) => dispatch(fetchMessage(hive_id, id)),
        clearThread: () => dispatch(clearThread()),
        action: (messageForm, hive_id, id) => dispatch(createThreadReply(messageForm, hive_id, id)),
        createHiveUser: (hiveUserForm) => dispatch(createHiveUser(hiveUserForm)),
        aboutModal: () => dispatch(openModal('aboutModal')),
        hiveUsersModal: () => dispatch(openModal('hiveUsersModal')),
    };
};

export default withRouter(
    connect(mapStateToProps, mapDispatchToProps)(Channel)
);
