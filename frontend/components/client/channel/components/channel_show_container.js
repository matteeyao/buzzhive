import { connect } from "react-redux";
import { fetchHive } from "../../../../actions/hive_actions";
import ChannelDetail from "./channel_show";
import { withRouter } from "react-router-dom"

const mapStateToProps = (state, ownProps) => {
    return {
        hive: state.entities.hives[ownProps.match.params.hiveId],
        messages: Object.values(state.entities.messages),
        users: state.entities.users,
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        fetchHive: (id) => dispatch(fetchHive(id)),
    };
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(ChannelDetail));
