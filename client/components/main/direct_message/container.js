import { connect } from "react-redux";
import { fetchDM } from "../../../actions/direct_message_actions";
import { fetchMessages } from "../../../actions/message_actions";
import { openModal } from "../../../actions/modal_actions";
import DirectMessage from "./component";
import { withRouter } from "react-router-dom";

const mapStateToProps = (state) => {
    return {
        currentDirectMessage: state.entities.currentDirectMessage,
        messages: Object.values(state.entities.messages),
        currentUser: state.session.currentUser
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        fetchDM: (id) => dispatch(fetchDM(id)),
        fetchMessages: (data) => dispatch(fetchMessages(data)),
        aboutModal: () => dispatch(openModal('aboutModal')),
    };
};

export default withRouter(
    connect(mapStateToProps, mapDispatchToProps)(DirectMessage)
);
