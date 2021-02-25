import { connect } from 'react-redux';
import { openModal } from '../../../actions/modal_actions';
import Sidebar from './sidebar';

const mapStateToProps = state => ({
    state,
});

const mapDispatchToProps = dispatch => {
    return {
        hiveModal: () => dispatch(openModal('hiveModal')),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Sidebar);
