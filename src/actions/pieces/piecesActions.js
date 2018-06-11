/* eslint-disable func-names, no-console */

import * as firebase from 'firebase';
import 'firebase/firestore';
import axios from 'axios';

import { reset } from 'redux-form';
import * as types from './actionTypes';

// const piecesJSON = require('../../scripts/public-art.json');
// const imageDataURL = 'https://services1.arcgis.com/AVP60cs0Q9PEA8rH/arcgis/rest/services/Calgary_PublicArt_PublicView/FeatureServer/0/query?f=json&where=1%3D1&returnGeometry=true&spatialRel=esriSpatialRelIntersects&outFields=*&outSR=102100&resultOffset=0&resultRecordCount=1000';

// import facebookLogin from './providers/facebook';

export function setPiecesFetchedSuccess(pieces) {
  return { type: types.PIECES_FETCH_SUCCESS, pieces };
}

export function retrieve() {
  console.log('WHY ARE YOU CALLING SO MANY TIMES?? FIX ME! retrieveretrieveretrieve');
  const Pieces = firebase.firestore().collection('pieces');
  return function (dispatch) {
    return Pieces.get()
      .then(({ docs }) => {
        const pieces = docs.map((doc) => {
          return {
            id: doc.id,
            ...doc.data(),
          };
        });

        return dispatch(setPiecesFetchedSuccess(pieces));
      })
      .catch(err => console.log("error caught in pieces .get()", err));
  };
}

// Function to retreive images and upload all data to firebase. Deprecated
// export  function scrapeImages() {
//   const Pieces = firebase.firestore().collection('pieces');

//   return function (dispatch, getState) {
//     axios.get(imageDataURL)
//       .then((imageRes) => {
//         console.log('imageRes', imageRes.data.features.length);
//         Promise.all(piecesJSON.map((piece, i) => {
//           const { ART_ID } = piece;
//           // Find the doc in the image data
//           const imageDocObject = _.find(imageRes.data.features, imageDoc => imageDoc.attributes.ART_ID === ART_ID);
//           // Update our doc with the image doc URL
//           if (imageDocObject) {
//             piece.imageSource = imageDocObject.attributes.PIC_URL;
//             console.log('uploading new piece', piece)
//           }
//           return Pieces.push(piece);
//         }));
//       })
//     // It'll error out if the action creator doesn't return an object
//     return {"blah": "blah"}
//   }
// }
