import { RECEIVE_HIVE } from '../actions/hive_actions';
import { RECEIVE_MESSAGE } from '../actions/message_actions';

const messagesReducer = (state = {}, action) => {
    const { data } = action;
    Object.freeze(state)
    switch (action.type) {
        case RECEIVE_HIVE:
            return data.messages ? data.messages : {};
        case RECEIVE_MESSAGE:
            const message = { [data.message.id]: data.message };
            return { ...state, ...message }
        default:
            return state;
    }
};

export default messagesReducer;
