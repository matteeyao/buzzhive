import { connect } from 'react-redux';
import { openModal } from '../../../actions/modal_actions';
import { withRouter } from 'react-router-dom';
import Sidebar from './sidebar';

const mapStateToProps = state => ({
    state,
});

const mapDispatchToProps = dispatch => {
    return {
        hiveModal: () => dispatch(openModal('hiveModal')),
        aboutModal: () => dispatch(openModal('aboutModal')),
    };
};

export default withRouter(
    connect(mapStateToProps, mapDispatchToProps)(Sidebar)
);
