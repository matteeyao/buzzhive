import {
    RECEIVE_HIVES,
    RECEIVE_HIVE,
    REMOVE_HIVE
} from '../actions/hive_actions';

const hivesReducer = (state = {}, action) => {
    Object.freeze(state);
    const nextState = Object.assign({}, state);
    switch (action.type) {
        case RECEIVE_HIVES:
            return action.hives;
        case RECEIVE_HIVE:
            const { data } = action;
            nextState[data.hive.id] = data.hive;
            return nextState;
        case REMOVE_HIVE:
            delete nextState[action.hive_id];
            return nextState;
        default:
            return state;
    }
};

export default hivesReducer;
