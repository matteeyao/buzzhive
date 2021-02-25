import { combineReducers } from 'redux';

import sessionErrorsReducer from './session_errors_reducer';
import hiveErrorsReducer from './hive_errors_reducer';

const errorsReducer = combineReducers({
    session: sessionErrorsReducer,
    hive: hiveErrorsReducer,
});

export default errorsReducer;
