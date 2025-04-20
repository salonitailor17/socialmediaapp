import axios from 'axios';
import apiRoutes, {BASE_URL} from '../../routes';

export const CREATE_POST_SUCCESS = 'CREATE_POST_SUCCESS';
export const CREATE_POST_FAILURE = 'CREATE_POST_FAILURE';

export const createPost = formData => {
  return async (dispatch, getState) => {
    try {
      const token = getState().auth?.data?.data?.token;

      const response = await axios.post(
        `${BASE_URL}${apiRoutes.postCreate}`,
        formData,
        {
          headers: {
            'Content-Type': 'multipart/form-data',
            Authorization: `Bearer ${token}`,
          },
        },
      );

      dispatch({
        type: CREATE_POST_SUCCESS,
        payload: response.data,
      });
    } catch (error) {
      dispatch({
        type: CREATE_POST_FAILURE,
        payload: error.response?.data?.message || error.message,
      });
    }
  };
};
