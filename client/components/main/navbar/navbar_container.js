import { connect } from 'react-redux';
import { openModal } from '../../../actions/modal_actions';
import NavBar from './navbar';

const mapStateToProps = state => ({
    currentUser: state.session.currentUser,
});

const mapDispatchToProps = dispatch => ({
    profileModal: () => dispatch(openModal('profileModal')),
    searchModal: () => dispatch(openModal('searchModal')),
    aboutModal: () => dispatch(openModal('aboutModal'))
});

export default connect(mapStateToProps, mapDispatchToProps)(NavBar);
