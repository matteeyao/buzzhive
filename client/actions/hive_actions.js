import * as APIUtil from '../util/hive_api_util';

export const RECEIVE_HIVES = 'RECEIVE_HIVES';
export const RECEIVE_HIVE = 'RECEIVE_HIVE';
export const RECEIVE_HIVE_ERRORS = "RECEIVE_HIVE_ERRORS";
export const RECEIVE_HIVES_SEARCH = "RECEIVE_HIVES_SEARCH";
export const CLEAR_ERRORS = "CLEAR_ERRORS";
export const REMOVE_HIVE = "REMOVE_HIVE";

const receiveHives = hives => {
    return {
        type: RECEIVE_HIVES,
        hives,
    }
};

export const receiveHive = data => {
    return {
        type: RECEIVE_HIVE,
        data
    };
};

const receiveHivesSearch = data => (
    {
        type: RECEIVE_HIVES_SEARCH,
        data,
    }
)

const receiveHiveErrors = (errors) => (
    {
        type: RECEIVE_HIVE_ERRORS,
        errors
    }
)

const clearErrors = () => (
    {
        type: CLEAR_ERRORS   
    }
)

const removeHive = hive_id => (
    {
        type: REMOVE_HIVE,
        hive_id
    }
)

export const fetchHives = () => dispatch => (
    APIUtil.fetchHives().then(hives => (
        dispatch(receiveHives(hives))
    ))
);

export const fetchHive = id => dispatch => (
    APIUtil.fetchHive(id).then(payload => (
        dispatch(receiveHive(payload))
    ))
);

export const searchHives = () => dispatch => {
    return (APIUtil.searchHives().then(
        res => dispatch(receiveHivesSearch(res)),
        err => dispatch(receiveHiveErrors(err.responseJSON))
    ));
};

export const createHive = hiveForm => dispatch => {
    return (APIUtil.createHive(hiveForm).then(
        res => dispatch(receiveHive(res)),
        err => dispatch(receiveHiveErrors(err.responseJSON))
    ));
};

export const deleteHive = id => dispatch => {
    return (APIUtil.deleteHive(id).then(
        () => dispatch(removeHive(id)),
        err => receiveHiveErrors(err.responseJSON)
    ));
};
