import { connect } from "react-redux";
import DirectMessages from "./component";
import { fetchHives } from "../../../../../actions/hive_actions";

const mapStateToProps = state => {
    return {
        hives: Object.values(state.entities.hives),
        /* hivesLength: 196 + (state.entities.hives.length + 1) * 28 + 12, */
    };
};

const mapDispatchToProps = dispatch => {
    return {
        fetchHives: () => dispatch(fetchHives()),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(DirectMessages);
