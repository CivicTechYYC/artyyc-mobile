/* eslint-disable func-names, no-console */

import * as firebase from 'firebase';
import 'firebase/firestore';

import { NavigationActions } from 'react-navigation';
import { reset } from 'redux-form';
import * as types from './actionTypes';

// import facebookLogin from './providers/facebook';

export function setPiecesFetchedSuccess(pieces) {
  console.log('Here we are!', pieces);
  return { type: types.PIECES_FETCH_SUCCESS, pieces };
}

export function retrieve() {
  

  //SOON WE USE FIREBASE...
  const Pieces = firebase.firestore().collection('pieces');
  return function (dispatch) {
    return Pieces.get()
      .then(({ docs }) => {
        const pieces = docs.map((doc) => {
          return {
            doc
          };
        });
        return dispatch(setPiecesFetchedSuccess(pieces));
      })
      .catch(err => console.log(err));
  };
}
