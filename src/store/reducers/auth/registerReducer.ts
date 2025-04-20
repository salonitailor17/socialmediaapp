import {
  REGISTER_FAILURE,
  REGISTER_SUCCESS,
} from '../../actions/auth/registration';

const initialState = {
  data: null,
  error: null,
};

export const registerReducer = (state = initialState, action) => {
  switch (action.type) {
    case REGISTER_SUCCESS:
      return {...state, data: action.payload, error: null};
    case REGISTER_FAILURE:
      return {...state, data: null, error: action.payload};
    default:
      return state;
  }
};
