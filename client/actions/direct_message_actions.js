import * as APIUtil from '../util/direct_message_api_util';

export const RECEIVE_DIRECT_MESSAGES = 'RECEIVE_DIRECT_MESSAGES';
export const REMOVE_DIRECT_MESSAGE = "REMOVE_DIRECT_MESSAGE";

const receiveDMs = direct_messages => {
    return {
        type: RECEIVE_DIRECT_MESSAGES,
        direct_messages,
    }
};

const removeDM = direct_message_id => (
    {
        type: REMOVE_DIRECT_MESSAGE,
        direct_message_id
    }
)

export const fetchDMs = () => dispatch => (
    APIUtil.fetchDMs().then(direct_messages => (
        dispatch(receiveDMs(direct_messages))
    ))
);

export const deleteDM = id => dispatch => {
    return (APIUtil.deleteDM(id).then(
        () => dispatch(removeDM(id)),
        err => receiveHiveErrors(err.responseJSON)
    ));
};