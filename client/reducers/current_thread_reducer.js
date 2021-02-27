import { RECEIVE_THREAD, CLEAR_THREAD } from '../actions/message_actions';

const hivesReducer = (state = {}, action) => {
    Object.freeze(state);
    switch (action.type) {
        case RECEIVE_THREAD:
            return action.message;
        case CLEAR_THREAD:
            return {};
        default:
            return state;
    }
};

export default hivesReducer;
