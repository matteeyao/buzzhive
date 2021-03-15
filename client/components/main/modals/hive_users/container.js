import { connect } from 'react-redux';
import { closeModal } from '../../../../actions/modal_actions';
import { fetchUsers } from '../../../../actions/user_actions';
import { createHiveUser, removeHiveUser } from "../../../../actions/hive_user_actions";
import HiveUsers from './component';

const mapStateToProps = state => ({
    currentHive: state.entities.currentHive,
    allUsers: state.entities.allUsers,
    hiveUsers: state.entities.hiveUsers,
});

const mapDispatchToProps = dispatch => ({
    closeModal: () => dispatch(closeModal()),
    fetchUsers: () => dispatch(fetchUsers()),
    createHiveUser: (hiveUserForm) => dispatch(createHiveUser(hiveUserForm)),
    removeHiveUser: (hiveUserForm) => dispatch(removeHiveUser(hiveUserForm)),
});

export default connect(mapStateToProps, mapDispatchToProps)(HiveUsers);
