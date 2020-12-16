import { combineReducers } from "redux";

import usersReducer from "./users_reducer";
import hivesReducer from "./hives_reducer";
import messagesReducer from "./messages_reducer";

const entitiesReducer = combineReducers({
    users: usersReducer,
    hives: hivesReducer,
    messages: messagesReducer,
});

export default entitiesReducer;