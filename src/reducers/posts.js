import * as types from '../actions/posts/actionTypes';
import initialState from './initialState';

const { posts } = initialState;

export default function authReducer(state = posts, action) {
  switch (action.type) {
    case types.POSTS_FETCH_SUCCESS:
      return {
        ...state,
        list: action.posts,
      };
    case types.POST_DELETE_SINGLE_SUCCESS:
      return {
        ...state,
        list: state.list.filter(p => p.id !== action.id),
        error: action.error,
      };
    default:
      return state;
  }
}
