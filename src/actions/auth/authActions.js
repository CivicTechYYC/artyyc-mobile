/* eslint-disable func-names, no-console */

import * as firebase from 'firebase';
import { NavigationActions } from 'react-navigation';
import { reset } from 'redux-form';
import * as types from './actionTypes';

import facebookLogin from './providers/facebook';

export function setLoggedInUser({ user }) {
  return { type: types.AUTH_LOGIN_SUCCESS, user };
}

export function setLoginFailed(error) {
  return { type: types.AUTH_LOGIN_FAILED, error };
}

export function clearErrors() {
  return { type: types.AUTH_CLEAR_ERRORS };
}

export function signInWithEmailAndPassword(credentials) {
  return function (dispatch) {
    const email = credentials.email.toLowerCase();
    return firebase.auth().signInWithEmailAndPassword(email, credentials.password)
      .then(user => dispatch(setLoggedInUser(user)))
      .then(() =>
        dispatch(NavigationActions.navigate({ routeName: 'Overview' }))
          .then(dispatch(reset('signInWithEmailAndPassword'))))
      .catch(err => dispatch(setLoginFailed(err)));
  };
}

export function signInWithFacebook() {
  return function (dispatch) {
    return Promise.resolve()
      .then(facebookLogin)
      .then(user => dispatch(setLoggedInUser(user)))
      .catch(err => console.log(err));
  };
}

export function createUserWithEmailAndPassword(user) {
  const { displayName } = user;
  return function (dispatch) {
    const email = user.email.toLowerCase();
    return firebase.auth().createUserWithEmailAndPassword(email, user.password)
      .then(() => {
        firebase.auth().currentUser.updateProfile({ displayName });
      })
      .then(newUser => dispatch(setLoggedInUser(newUser)))
      .then(() => dispatch(NavigationActions.navigate({ routeName: 'SignIn' })))
      .catch(err => console.log(err));
  };
}


export function setUserLoggedOut() {
  return { type: types.AUTH_LOGOUT_SUCCESS };
}

export function logoutUser() {
  return function (dispatch) {
    return firebase.auth().signOut()
      .then(() => dispatch(setUserLoggedOut()))
      .then(() => dispatch(NavigationActions.navigate({ routeName: 'SignIn' })))
      .catch(err => console.log(err));
  };
}

// ---------------------------------------------------------
//  Update User
// ---------------------------------------------------------


// export function setUpdatedUser(user) {
//   console.log('updating user to', user);
//   return { type: types.AUTH_USER_UPDATE_SUCCESS, user };
// }

// export function updateUser(user) {
//  console.log('-----------', user.displayName);
//  console.log('updating user to', user);
//  return function (dispatch, getState) {
//    return firebase.auth().currentUser.updateProfile(user)
//       .then(user => { console.log("user", user); dispatch(setUpdatedUser(user))})
//      .catch(err => console.log(err));
//  };
// };
