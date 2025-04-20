import {FETCH_POSTS_FAILURE, FETCH_POSTS_SUCCESS} from '../../actions/app/post';

const initialState = {
  data: [],
  error: null,
};

export const postReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_POSTS_SUCCESS:
      return {...state, data: action.payload, error: null};
    case FETCH_POSTS_FAILURE:
      return {...state, data: [], error: action.payload};
    default:
      return state;
  }
};
