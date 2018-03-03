import * as firebase from 'firebase';
import 'firebase/firestore';

const config = {
  apiKey: "AIzaSyA69ItKzpCZnLNjf7owlVIKKz-tDh2fXM8",
  authDomain: "artyyc-e474d.firebaseapp.com",
  databaseURL: "https://artyyc-e474d.firebaseio.com",
  projectId: "artyyc-e474d",
  storageBucket: "",
  messagingSenderId: "492675319093"
};

const initializeFirebase = (store) => {
  firebase.initializeApp(config);

  firebase.auth().onAuthStateChanged((user) => {
    if (user) {
      store.dispatch({ type: 'AUTH_LOGIN_SUCCESS', user });
    }
  });
};

export default initializeFirebase;

