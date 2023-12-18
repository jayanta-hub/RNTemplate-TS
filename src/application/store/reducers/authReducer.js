import { LOGIN, FAIL, SUCCESS } from "../action-types";

const initialState = {
  isUserValid: false,
  isAuthenticating: false,
  error: {},
  loginUserInformation: {},
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case LOGIN:
      return { ...state, isAuthenticating: true };
    case `${LOGIN}_${SUCCESS}`:
      return {
        ...state,
        isUserValid: true,
        loginUserInformation: { ...payload },
      };
    case `${LOGIN}_${FAIL}`:
      return {
        ...state,
        isAuthenticating: false,
        isUserValid: false,
        error: { ...payload },
      };

    default:
      return state;
  }
};
