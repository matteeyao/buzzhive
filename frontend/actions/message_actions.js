import * as APIUtil from '../util/message_api_util';

export const RECEIVE_MESSAGE = 'RECEIVE_MESSAGE';

export const receiveMessage = message => ({
    type: RECEIVE_MESSAGE,
    message,
});

export const createMessage = (messageForm) => dispatch => (
    APIUtil.createMessage(messageForm).then(message => (
        dispatch(receiveMessage(message))
    ))
);
