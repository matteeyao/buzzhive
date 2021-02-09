import { connect } from "react-redux";
import { fetchHive } from "../../../actions/hive_actions";
import Hive from "./channel";
import { withRouter } from "react-router-dom";

const mapStateToProps = (state) => {
    return {
        currentHive: state.entities.currentHive,
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
