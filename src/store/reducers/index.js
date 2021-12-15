import { combineReducers } from "redux";

import account from "./account.reducer";
import users from "./users.reducer";
import list from "./list.reducer";

export default combineReducers({ account, users, list });
