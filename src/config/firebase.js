import * as firebase from 'firebase';
import 'firebase/firestore';

const config = {
  apiKey: 'AIzaSyDKejlF7LxgFd-M6hP6c3lo7K7Meco2BUQ',
  authDomain: 'tracker-44d12.firebaseapp.com',
  databaseURL: 'https://tracker-44d12.firebaseio.com',
  projectId: 'tracker-44d12',
  storageBucket: '',
  messagingSenderId: '1084142728009',
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

