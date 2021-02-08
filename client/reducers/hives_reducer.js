import {
    RECEIVE_HIVES,
} from '../actions/hive_actions';

const hivesReducer = (state = {}, action) => {
    Object.freeze(state);
    switch (action.type) {
        case RECEIVE_HIVES:
            return action.hives;
        default:
            return state;
    }
};

export default hivesReducer;
