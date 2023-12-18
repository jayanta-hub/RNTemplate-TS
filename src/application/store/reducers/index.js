import { combineReducers } from "redux";
import { SUCCESS, LOGOUT } from "../action-types";
import authReducer from "./authReducer";
import timeLine from "./timeLine";
const rootReducer = combineReducers({
  authReducer,
  timeLine,
});

const appReducer = (state, action) => {
  if (action.type === `${LOGOUT}_${SUCCESS}`) {
    return rootReducer(undefined);
  }
  return rootReducer(state, action);
};
export default appReducer;
