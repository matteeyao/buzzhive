import {
    RECEIVE_HIVE,
} from '../actions/hive_actions';

const hivesReducer = (state = {}, action) => {
    Object.freeze(state);
    switch (action.type) {
        case RECEIVE_HIVE:
            const { data } = action;
            return data.hive;
        default:
            return state;
    }
};

export default hivesReducer;
