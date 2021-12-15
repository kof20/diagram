import produce from "immer";
import { handleActions } from "redux-actions";

import { usersMock } from "../mocks/users.mocks";
import { addUser, removeUser } from "../actions/users.actions";

export const initialState = {
  users: usersMock,
};

export default handleActions(
  {
    [addUser]: produce((state, { payload: { user } }) => {
      state.users = [...state.users, user];
    }),
    [removeUser]: produce((state, { payload: { uid } }) => {
      state.users = state.users.filter(u => u.uid !== uid);
    }),
  },
  initialState
);
