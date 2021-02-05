import {
    RECEIVE_HIVES_SEARCH
} from '../actions/hive_actions';

const hivesReducer = (state = null, action) => {
    Object.freeze(state);
    switch (action.type) {
        case RECEIVE_HIVES_SEARCH:
            return action.data
        default:
            return state;
    }
};

export default hivesReducer;