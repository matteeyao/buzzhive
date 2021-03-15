import { connect } from "react-redux";
import Hives from "./component";
import { fetchHives } from "../../../../../actions/hive_actions";
import { openModal } from '../../../../../actions/modal_actions';
import { withRouter } from 'react-router-dom';

const mapStateToProps = state => {
    return {
        hives: Object.values(state.entities.hives),
    };
};

const mapDispatchToProps = dispatch => {
    return {
        fetchHives: () => dispatch(fetchHives()),
        hiveModal: () => dispatch(openModal('hiveModal')),
    };
};

export default withRouter(
    connect(mapStateToProps, mapDispatchToProps)(Hives)
);
