import { handleActions } from "redux-actions";

import { listSchema } from "../../config/list.config";

export const initialState = {
  listSchema,
};

export default handleActions({}, initialState);
