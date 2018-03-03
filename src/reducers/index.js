import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';


import authReducer from './auth';
import postsReducer from './posts';
import piecesReducer from './pieces'

const rootReducer = (state, action) => {
  if (action.type === 'AUTH_LOGOUT_USER') {
    // eslint-disable-next-line no-param-reassign
    state = undefined;
  }
  return {};
};

export default function getRootReducer(navReducer) {
  return combineReducers({
    rootReducer,
    form: formReducer,
    nav: navReducer,
    auth: authReducer,
    posts: postsReducer,
    pieces: piecesReducer
  });
}
