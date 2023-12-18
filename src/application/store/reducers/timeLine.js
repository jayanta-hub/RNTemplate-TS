import { FAIL, SUCCESS, GET_OTH_SUPT_APP_DATA } from "../action-types";

const initialState = {
  isLoading: false,
  getOtherSupportingAppData: {},
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case GET_OTH_SUPT_APP_DATA:
      return { ...state, isLoading: true };
    case `${GET_OTH_SUPT_APP_DATA}_${SUCCESS}`:
      return {
        ...state,
        getOtherSupportingAppData: { ...payload },
        isLoading: false,
      };
    case `${GET_OTH_SUPT_APP_DATA}_${FAIL}`:
      return { ...state, error: { ...payload }, isLoading: false };
    default:
      return state;
  }
};
