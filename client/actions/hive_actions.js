import * as APIUtil from '../util/hive_api_util';

export const RECEIVE_HIVES = 'RECEIVE_HIVES';
export const RECEIVE_HIVE = 'RECEIVE_HIVE';
export const RECEIVE_HIVE_ERRORS = "RECEIVE_HIVE_ERRORS"
export const RECEIVE_HIVES_SEARCH = "RECEIVE_HIVES_SEARCH"

export const receiveHives = hives => {
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

const receiveHiveErrors = ({ responseJSON }) => (
    {
        type: RECEIVE_HIVE_ERRORS,
        errors: responseJSON,
    }
)

const receiveHivesSearch = data => (
    {
        type: RECEIVE_HIVES_SEARCH,
        data,
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
        res => receiveHiveErrors(res)
    ));
};

// export const createBench = bench => dispatch => (
//     APIUtil.createBench(bench).then(bench => (
//         dispatch(receiveBench(bench))
//     ))
// );
