import { CLOSE_MODAL } from '../actions/modal_actions';
import { RECEIVE_HIVE_ERRORS, CLEAR_ERRORS } from '../actions/hive_actions';

export default (state = [], action) => {
    Object.freeze(state);
    switch (action.type) {
        case RECEIVE_HIVE_ERRORS:
            return action.errors;
        case CLOSE_MODAL:
            return [];
        case CLEAR_ERRORS:
            return [];        
        default:
            return state;
    }
};
