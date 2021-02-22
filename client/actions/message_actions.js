import * as APIUtil from '../util/message_api_util';

export const RECEIVE_MESSAGES = 'RECEIVE_MESSAGES';
export const RECEIVE_MESSAGE = 'RECEIVE_MESSAGE';

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

export const fetchMessages = id => dispatch => (
    APIUtil.fetchMessages(id).then(messages => (
        dispatch(receiveMessages(messages))
    ))
);

export const createMessage = (messageForm) => dispatch => (
    APIUtil.createMessage(messageForm).then(message => (
        dispatch(receiveMessage(message))
    ))
);
