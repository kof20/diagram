import produce from "immer";
import { handleActions } from "redux-actions";
import { login, logout } from "../actions/account.actions";

export const emptyUser = {
  uid: "",
  firstName: "",
  lastName: "",
  email: "",
  password: "",
};

export const initialState = {
  loggedIn: false,
  user: emptyUser,
};

export default handleActions(
  {
    [login]: produce((state, { payload: user }) => {
      state.user = user;
      state.loggedIn = true;
    }),
    [logout]: produce(state => {
      state.user = emptyUser;
      state.loggedIn = false;
    }),
  },
  initialState
);
