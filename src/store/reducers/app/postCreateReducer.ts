import {
  CREATE_POST_FAILURE,
  CREATE_POST_SUCCESS,
} from '../../actions/app/createPost';

const initialState = {
  data: null,
  error: null,
};

export const postCreateReducer = (state = initialState, action) => {
  switch (action.type) {
    case CREATE_POST_SUCCESS:
      return {...state, data: action.payload, error: null};
    case CREATE_POST_FAILURE:
      return {...state, data: null, error: action.payload};
    default:
      return state;
  }
};
