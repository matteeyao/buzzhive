import { combineReducers } from "redux";

import usersReducer from "./users_reducer";
import hivesReducer from "./hives_reducer";
import currentHiveReducer from "./current_hive_reducer";
import currentThreadReducer from "./current_thread_reducer";
import messagesReducer from "./messages_reducer";
import searchReducer from "./search_reducer";

const entitiesReducer = combineReducers({
    users: usersReducer,
    currentHive: currentHiveReducer,
    hives: hivesReducer,
    currentThread: currentThreadReducer,
    messages: messagesReducer,
    search: searchReducer,
});

export default entitiesReducer;