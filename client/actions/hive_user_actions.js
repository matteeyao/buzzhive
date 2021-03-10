import * as APIUtil from '../util/hive_user_api_util';
import {receiveHive} from './hive_actions';

export const createHiveUser = hive_id => dispatch => (
    APIUtil.subscribe(hive_id).then(payload => (
        dispatch(receiveHive(payload))
    ))
);
