import {
    RECEIVE_HIVES,
    RECEIVE_HIVE,
} from '../actions/hive_actions';

const hivesReducer = (state = {}, action) => {
    Object.freeze(state);
    switch (action.type) {
        case RECEIVE_HIVES:
            return action.hives;
        case RECEIVE_HIVE:
            const { data } = action;
            const hive = { [data.hive.id]: data.hive };
            return Object.assign({}, state, hive);
        default:
            return state;
    }
};

export default hivesReducer;
