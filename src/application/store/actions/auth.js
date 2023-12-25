import { FAIL, SUCCESS, LOGIN } from '../action-types';

export const logIn = payloadData => dispatch =>
  dispatch({
    type: LOGIN,
    payload: {
      request: {
        url: 'api/v1/auth/signin', //add endpoint
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        data: payloadData,
      },
      options: {
        onSuccess({ response }) {
          console.log(
            '🚀 ~ file: auth.js:17 ~ onSuccess ~ response:',
            response,
          );
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
          console.log(
            '🚀 ~ file: auth.js:36 ~ onError ~ exception:',
            exception,
          );
          if (exception.error.isAxiosError) {
            const {
              response: { data: dataError },
            } = exception.error;
            const data = exception.error.response.data;
            dispatch({ type: `${LOGIN}_${FAIL}`, payload: { dataError } });
            return Promise.reject(dataError);
          }
          dispatch({ type: `${LOGIN}_${FAIL}`, payload: {} });
          return Promise.reject();
        },
      },
    },
  });
