
import * as firebase from 'firebase';
import appConfig from '../../../config/app';

const authenticate = (token) => {
  const provider = firebase.auth.FacebookAuthProvider;
  const credential = provider.credential(token);
  return firebase.auth().signInWithCredential(credential);
};


export default async function login() {
  const { appId } = appConfig.AUTH.FACEBOOK;
  const options = {
    permissions: ['public_profile', 'email'],
  };

  // eslint-disable-next-line no-undef
  const { type, token } = await Expo.Facebook.logInWithReadPermissionsAsync(appId, options);

  if (type === 'success') {
    // const response = await fetch(`https://graph.facebook.com/me?access_token=${token}`);

    // eslint-disable-next-line no-undef
    await fetch(`https://graph.facebook.com/me?access_token=${token}`);
    // console.log(await response.json());
    authenticate(token);
  }
}
