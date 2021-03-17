import { combineReducers } from "redux";

import hiveUsersReducer from "./hive_users_reducer";
import allUsersReducer from "./users_reducer";
import hivesReducer from "./hives_reducer";
import currentHiveReducer from "./current_hive_reducer";
import currentThreadReducer from "./current_thread_reducer";
import directMessagesReducer from "./direct_messages_reducer";
import messagesReducer from "./messages_reducer";
import searchReducer from "./search_reducer";

const entitiesReducer = combineReducers({
    hiveUsers: hiveUsersReducer,
    allUsers: allUsersReducer,
    currentHive: currentHiveReducer,
    hives: hivesReducer,
    currentThread: currentThreadReducer,
    directMessages: directMessagesReducer,
    messages: messagesReducer,
    search: searchReducer,
});

export default entitiesReducer;