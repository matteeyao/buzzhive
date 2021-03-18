import * as APIUtil from '../util/message_api_util';

export const RECEIVE_MESSAGES = 'RECEIVE_MESSAGES';
export const RECEIVE_MESSAGE = 'RECEIVE_MESSAGE';
export const RECEIVE_THREAD = 'RECEIVE_THREAD';
export const CLEAR_THREAD = 'CLEAR_THREAD';

export const receiveMessages = messages => {
    return {
        type: RECEIVE_MESSAGES,
        messages,
    }
};

export const receiveMessage = message => {
    return {
        type: RECEIVE_MESSAGE,
        message,
    };
};

export const receiveThread = message => {
    return {
        type: RECEIVE_THREAD,
        message,
    };
};

export const closeThread = () => {
    return {
        type: CLEAR_THREAD,
    };
};

export const fetchMessages = data => dispatch => (
    APIUtil.fetchMessages(data).then(messages => (
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

export const createThreadReply = (messageForm, hive_id, id) => dispatch => {
    return (
        APIUtil.createMessage(messageForm).then(() => (
            dispatch(fetchMessage(hive_id, id))
        ))
    );
};

export const clearThread = () => dispatch => (
    dispatch(closeThread())
);
