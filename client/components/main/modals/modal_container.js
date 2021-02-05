import { connect } from 'react-redux';
import { closeModal } from '../../../actions/modal_actions';
import { logout } from '../../../actions/session_actions';
import Modal from './modal';

const mapStateToProps = state => {
    return {
        modal: state.ui.modal,
        currentUser: state.session.currentUser
    };
};

const mapDispatchToProps = dispatch => {
    return {
        closeModal: () => dispatch(closeModal()),
        logout: () => dispatch(logout())
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Modal);