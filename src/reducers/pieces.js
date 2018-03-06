import * as types from '../actions/pieces/actionTypes';
import initialState from './initialState';

const { pieces } = initialState;

export default function piecesReducer(state = pieces, action) {
  switch (action.type) {
    case types.PIECES_FETCH_SUCCESS:
      return {
        ...state,
        list: action.pieces,
        arePiecesLoaded: true
      };
    default:
      return state;
  }
}
