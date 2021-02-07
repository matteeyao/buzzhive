import { connect } from "react-redux";
import Hives from "./component";
import { fetchHives } from "../../../../../actions/hive_actions";

const mapStateToProps = state => {
    return {
        hives: Object.values(state.entities.hives),
    };
};

const mapDispatchToProps = dispatch => {
    return {
        fetchHives: () => dispatch(fetchHives()),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Hives);
