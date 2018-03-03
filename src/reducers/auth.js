import * as types from '../actions/auth/actionTypes';
import initialState from './initialState';

const { auth } = initialState;

export default function authReducer(state = auth, action) {
  switch (action.type) {
    case types.AUTH_LOGIN_SUCCESS:
      return {
        ...state,
        isLoggedIn: true,
        user: action.user,
        error: null,
      };
    case types.AUTH_LOGIN_FAILED:
      return {
        ...state,
        isLoggedIn: false,
        error: action.error,
      };
    case types.SET_INVALID_SIGNIN:
      return {
        ...state,
        invalidSignIn: true,
      };
    case types.AUTH_USER_UPDATE_SUCCESS: {
      return {
        ...state,
        user: action.user,
      };
    }
    case types.AUTH_CLEAR_ERRORS: {
      return {
        ...state,
        error: null,
      };
    }
    case types.AUTH_LOGOUT_SUCCESS:
      return {
        ...initialState.auth,
      };
    case types.CHANGE_PASSWORD_SUCCESS:
      return {};
    default:
      return state;
  }
}
