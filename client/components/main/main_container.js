import { connect } from 'react-redux';
import { logout } from '../../actions/session_actions';
import { openModal } from '../../actions/modal_actions';
import Main from './main';

const mapStateToProps = state => ({
    state,
});

const mapDispatchToProps = dispatch => {
    return {
        logout: (user) => dispatch(logout(user)),
        channelModal: () => dispatch(openModal('channelModal')),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Main);
