import axios from 'axios';
import apiRoutes, {BASE_URL} from '../../routes';

export const FETCH_POSTS_SUCCESS = 'FETCH_POSTS_SUCCESS';
export const FETCH_POSTS_FAILURE = 'FETCH_POSTS_FAILURE';

export const fetchPosts = id => {
  return async (dispatch, getState) => {
    try {
      const token = getState().auth?.data?.data?.token;

      const response = await axios.get(`${BASE_URL}${apiRoutes.post}/${id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      dispatch({
        type: FETCH_POSTS_SUCCESS,
        payload: response.data,
      });
    } catch (error) {
      dispatch({
        type: FETCH_POSTS_FAILURE,
        payload: error.response?.data?.message || error.message,
      });
    }
  };
};
