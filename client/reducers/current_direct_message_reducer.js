import { RECEIVE_DIRECT_MESSAGE } from '../actions/direct_message_actions';

const hivesReducer = (state = {}, action) => {
    Object.freeze(state);
    switch (action.type) {
        case RECEIVE_DIRECT_MESSAGE:
            const { data } = action;
            return data.directMessage;
        default:
            return state;
    }
};

export default hivesReducer;
