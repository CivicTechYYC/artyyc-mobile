/* eslint-disable func-names, no-console */

import * as firebase from 'firebase';
import 'firebase/firestore';

import { NavigationActions } from 'react-navigation';
import { reset } from 'redux-form';
import * as types from './actionTypes';

// import facebookLogin from './providers/facebook';

export function setLoggedInUser({ user }) {
  return { type: types.AUTH_LOGIN_SUCCESS, user };
}

export function setPostsFetchedSuccess(posts) {
  return { type: types.POSTS_FETCH_SUCCESS, posts };
}

export function clearErrors() {
  return { type: types.AUTH_CLEAR_ERRORS };
}

export function retrieve() {
  const Posts = firebase.firestore().collection('posts');
  return function (dispatch) {
    return Posts.get()
      .then(({ docs }) => {
        const posts = docs.map((doc) => {
          return {
            id: doc.id,
            ...doc.data(),
          };
        });
        return dispatch(setPostsFetchedSuccess(posts));
      })
      .catch(err => console.log(err));
  };
}


export function updatePostSuccess(post) {
  return { type: types.POST_UPDATE_SINGLE_SUCCESS, post };
}

export function createPostSuccess(post) {
  return { type: types.POST_CREATE_SINGLE_SUCCESS, post };
}


export function createOrUpdatePost(post) {
  const Posts = firebase.firestore().collection('posts');
  return function (dispatch) {
    let action;

    if (post.id) {
      const { id, ...restPost } = post;
      action = Posts.doc(id).update(restPost).then(() => dispatch(updatePostSuccess(post)));
    } else {
      action = Posts.add(post).then((newPost) => {
        return Posts.doc(newPost.id).get().then((p) => {
          dispatch(createPostSuccess({
            id: newPost.id,
            ...p.data(),
          }));
        });
      });
    }

    return action.then(() => {
      dispatch(NavigationActions.back());
      dispatch(reset('createEditPost'));
    });
  };
}


export function deletePostSuccess(id) {
  return { type: types.POST_DELETE_SINGLE_SUCCESS, id };
}

export function deletePost(post) {
  const Posts = firebase.firestore().collection('posts');
  return function (dispatch) {
    const { id } = post;
    return Posts.doc(id)
      .delete()
      .then(() => {
        dispatch(deletePostSuccess(id));
        dispatch(NavigationActions.back());
        dispatch(reset('createEditPost'));
      });
  };
}
