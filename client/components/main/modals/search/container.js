import { connect } from 'react-redux';
import { closeModal } from '../../../../actions/modal_actions';
import { searchHives } from '../../../../actions/hive_actions';
import { fetchUsers } from '../../../../actions/user_actions';
import { createDM } from '../../../../actions/direct_message_actions';
import Search from './component';

const mapStateToProps = ({ session: { currentUser }, entities: { allUsers, directMessages, search } }) => ({
    users: Object.values(allUsers),
    directMessages,
    search,
    currentUser,
});

const mapDispatchToProps = dispatch => ({
    searchHives: () => dispatch(searchHives()),
    fetchUsers: () => dispatch(fetchUsers()),
    createDM: (dmForm) => dispatch(createDM(dmForm)),
    closeModal: () => dispatch(closeModal()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Search);
