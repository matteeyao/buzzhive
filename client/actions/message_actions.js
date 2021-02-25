import * as APIUtil from '../util/message_api_util';

export const RECEIVE_MESSAGES = 'RECEIVE_MESSAGES';
export const RECEIVE_MESSAGE = 'RECEIVE_MESSAGE';
export const RECEIVE_THREAD = 'RECEIVE_THREAD';

const receiveMessages = messages => {
    return {
        type: RECEIVE_MESSAGES,
        messages,
    }
};

const receiveMessage = message => {
    return {
        type: RECEIVE_MESSAGE,
        message,
    };
};

const receiveThread = message => {
    return {
        type: RECEIVE_THREAD,
        message,
    };
};

export const fetchMessages = id => dispatch => (
    APIUtil.fetchMessages(id).then(messages => (
        dispatch(receiveMessages(messages))
    ))
);

export const fetchMessage = (hive_id, id) => dispatch => (
    APIUtil.fetchMessage(hive_id, id).then(message => (
        dispatch(receiveThread(message))
    ))
);

export const createMessage = (messageForm) => dispatch => (
    APIUtil.createMessage(messageForm).then(message => (
        dispatch(receiveMessage(message))
    ))
);
