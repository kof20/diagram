import { createAction } from "redux-actions";

export const login = createAction("@ACCOUNT/LOGIN", payload => payload);

export const logout = createAction("@ACCOUNT/LOGOUT", payload => payload);
