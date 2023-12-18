import { FAIL, SUCCESS, GET_DEMO } from "../action-types";
export const getDemoApi = (authToken) => (dispatch) =>
  dispatch({
    type: GET_DEMO,
    payload: {
      request: {
        url: `api/v1/get/arithaconsulting`, //add endpoint
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${authToken}`,
        },
      },
      options: {
        onSuccess({ response }) {
          const { data, error } = response;
          // If Api response success
          dispatch({
            type: `${GET_DEMO}_${SUCCESS}`,
            payload: { ...data },
          });
          // if Api response fail
          dispatch({
            type: `${GET_DEMO}_${FAIL}`,
            payload: { ...error },
          });
          return Promise.reject(error);
        },
        onError(exception) {
          if (exception.error.isAxiosError) {
            const {
              response: { data: dataError },
            } = exception.error;
            dispatch({
              type: `${GET_DEMO}_${FAIL}`,
              payload: { dataError },
            });
            return Promise.reject(dataError);
          }
          dispatch({
            type: `${GET_DEMO}_${FAIL}`,
            payload: {},
          });
          return Promise.reject();
        },
      },
    },
  });
