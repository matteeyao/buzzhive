import { connect } from "react-redux";
import DirectMessages from "./component";
import { fetchDMs, deleteDM } from "../../../../../actions/direct_message_actions";

const mapStateToProps = state => {
    return {
        hives: Object.values(state.entities.hives),
        directMessages: Object.values(state.entities.directMessages),
        currentUser: state.session.currentUser,
        /* hivesLength: 196 + (state.entities.hives.length + 1) * 28 + 12, */
    };
};

const mapDispatchToProps = dispatch => {
    return {
        fetchDMs: () => dispatch(fetchDMs()),
        deleteDM: (id) => dispatch(deleteDM(id))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(DirectMessages);
