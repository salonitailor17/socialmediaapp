import {createStore, applyMiddleware, combineReducers} from 'redux';
import {thunk} from 'redux-thunk';

import {loginReducer} from './reducers/auth/loginReducer';
import {registerReducer} from './reducers/auth/registerReducer';
import {postReducer} from './reducers/app/postReducer';
import {postCreateReducer} from './reducers/app/postCreateReducer';

const rootReducer = combineReducers({
  auth: loginReducer,
  register: registerReducer,
  posts: postReducer,
  postCreate: postCreateReducer,
});

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;
