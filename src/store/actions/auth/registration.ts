import axios from 'axios';
import apiRoutes, {BASE_URL} from '../../routes';

export const REGISTER_SUCCESS = 'REGISTER_SUCCESS';
export const REGISTER_FAILURE = 'REGISTER_FAILURE';

export const register = data => {
  return async dispatch => {
    try {
      const response = await axios.post(
        `${BASE_URL}${apiRoutes.registration}`,
        data,
      );

      dispatch({type: REGISTER_SUCCESS, payload: response.data});
    } catch (error) {
      dispatch({
        type: REGISTER_FAILURE,
        payload: error.response?.data?.message || error.message,
      });
    }
  };
};
