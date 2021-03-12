import { RECEIVE_HIVE } from '../actions/hive_actions';
import { RECEIVE_USERS } from '../actions/user_actions';

const hiveUsersReducer = (state = {}, action) => {
    Object.freeze(state);

    switch (action.type) {
        case RECEIVE_HIVE:
            const { data } = action;
            return data.hiveUsers ? data.hiveUsers : {};
        default:
            return state;
    }
};

export default hiveUsersReducer;
