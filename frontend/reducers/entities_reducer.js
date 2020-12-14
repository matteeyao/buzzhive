import { combineReducers } from "redux";

import usersReducer from "./users_reducer";
import hivesReducer from "./hives_reducer";

const entitiesReducer = combineReducers({
    users: usersReducer,
    hives: hivesReducer
});

export default entitiesReducer;