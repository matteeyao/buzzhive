import { connect } from 'react-redux';
import { logout } from '../../actions/session_actions';
// import { openModal } from '../../actions/modal_actions';
import { withRouter } from 'react-router-dom';
import Main from './component';

const mapStateToProps = state => ({
    state,
});

const mapDispatchToProps = dispatch => {
    return {
        logout: (user) => dispatch(logout(user)),
    };
};

export default withRouter(
    connect(mapStateToProps, mapDispatchToProps)(Main)
);
