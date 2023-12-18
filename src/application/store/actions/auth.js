import { FAIL, SUCCESS, LOGIN } from "../action-types";

export const logIn = (payloadData) => (dispatch) =>
  dispatch({
    type: LOGIN,
    payload: {
      request: {
        url: "api/v1/authenticate", //add endpoint
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        data: payloadData,
      },
      options: {
        onSuccess({ response }) {
          const { data, error } = response;
          // If Api response success
          if (data.status === 200) {
            dispatch({
              type: `${LOGIN}_${SUCCESS}`,
              payload: { ...data, ...payloadData },
            });

            return Promise.resolve({ ...data });
          }

          // if Api response fail
          dispatch({
            type: `${LOGIN}_${FAIL}`,
            payload: { ...error }, // If you get fail response in data parameter please replace error to data
          });
          return Promise.reject(error); // If you get fail response in data parameter please replace error to data
        },
        onError(exception) {
          if (exception.error.isAxiosError) {
            const {
              response: { data: dataError },
            } = exception.error;
            dispatch({ type: `${LOGIN}_${FAIL}`, payload: { dataError } });
            return Promise.reject(dataError);
          }
          dispatch({ type: `${LOGIN}_${FAIL}`, payload: {} });
          return Promise.reject();
        },
      },
    },
  });
