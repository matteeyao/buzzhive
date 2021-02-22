import { RECEIVE_HIVE } from '../actions/hive_actions';
import { RECEIVE_MESSAGES, RECEIVE_MESSAGE } from '../actions/message_actions';

const messagesReducer = (state = {}, action) => {
    Object.freeze(state)
    switch (action.type) {
        case RECEIVE_MESSAGES:
            return action.messages ? action.messages : {};
        case RECEIVE_MESSAGE:
            const message = { [action.message.id]: action.message };
            return { ...state, ...message }
        default:
            return state;
    }
};

export default messagesReducer;
