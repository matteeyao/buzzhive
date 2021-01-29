import { connect } from "react-redux";
import { fetchHive } from "../../../actions/hive_actions";
import Hive from "./hive";
import { withRouter } from "react-router-dom";

const mapStateToProps = (state, ownProps) => {
    return {
        currentHive: state.entities.hives[ownProps.match.params.hiveId],
        users: state.entities.users,
        messages: Object.values(state.entities.messages),
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        fetchHive: (id) => dispatch(fetchHive(id)),
    };
};

export default withRouter(
    connect(mapStateToProps, mapDispatchToProps)(Hive)
);
