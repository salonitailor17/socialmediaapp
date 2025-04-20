import {LOGIN_FAILURE, LOGIN_SUCCESS, LOGOUT} from '../../actions/auth/login';

const initialState = {
  data: null,
  error: null,
};

export const loginReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_SUCCESS:
      return {...state, data: action.payload, error: null};
    case LOGIN_FAILURE:
      return {...state, data: null, error: action.payload};
    case LOGOUT:
      return initialState;
    default:
      return state;
  }
};
