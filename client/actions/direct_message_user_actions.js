import * as APIUtil from '../util/hive_user_api_util';
import {receiveHive} from './hive_actions';

export const REMOVE_HIVE_USER = "REMOVE_HIVE_USER";

// const deleteHiveUser = user_id => (
//     {
//         type: REMOVE_HIVE_USER,
//         user_id,
//     }
// )

// export const createHiveUser = hiveUserForm => dispatch => (
//     APIUtil.subscribe(hiveUserForm).then(payload => (
//         dispatch(receiveHive(payload))
//     ))
// );

// export const removeHiveUser = hiveUserForm => dispatch => (
//     APIUtil.unsubscribe(hiveUserForm).then(() => (
//         dispatch(deleteHiveUser(hiveUserForm.user_id))
//     ))
// )