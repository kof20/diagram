import { createAction } from "redux-actions";

export const removeUser = createAction("@USERS/REMOVE_USER", payload => payload);

export const addUser = createAction("@USERS/ADD_USER", payload => payload);
