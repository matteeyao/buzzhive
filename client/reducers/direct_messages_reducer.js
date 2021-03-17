import {
    RECEIVE_DIRECT_MESSAGES,
    // RECEIVE_HIVE,
    REMOVE_DIRECT_MESSAGE
} from '../actions/direct_message_actions';

const hivesReducer = (state = {}, action) => {
    Object.freeze(state);
    const nextState = Object.assign({}, state);
    switch (action.type) {
        case RECEIVE_DIRECT_MESSAGES:
            return action.direct_messages;
        // case RECEIVE_HIVE:
        //     const { data } = action;
        //     nextState[data.hive.id] = data.hive;
        //     return nextState;
        case REMOVE_DIRECT_MESSAGE:
            delete nextState[action.direct_message_id];
            return nextState;
        default:
            return state;
    }
};

export default hivesReducer;
