import * as types from '../actions/pieces/actionTypes';
import initialState from './initialState';

const { pieces } = initialState;

export default function authReducer(state = pieces, action) {
  switch (action.type) {
    case types.PIECE_FETCH_SUCCESS:
      return {
        ...state,
        markers: action.pieces,
      };
    default:
      return state;
  }
}
