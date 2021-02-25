import {
    RECEIVE_THREAD,
} from '../actions/message_actions';

const hivesReducer = (state = {}, action) => {
    Object.freeze(state);
    switch (action.type) {
        case RECEIVE_THREAD:
            return action.message;
        default:
            return state;
    }
};

export default hivesReducer;
