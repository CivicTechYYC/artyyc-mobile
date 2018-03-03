import { Platform, StatusBar } from 'react-native';
import { StackNavigator } from 'react-navigation';

import SignInScreen from '../screens/signin/SignInContainer';
import SignInWithEmail from '../screens/signin/SignInWithEmailContainer';
import SignUp from '../screens/signup/SignUpContainer';

const headerStyle = {
  // display: 'none',
  marginTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
};

const NonAuthenticatedRoutes = StackNavigator(
  {
    SignIn: {
      screen: SignInScreen,
      navigationOptions: {
        header: null,
        title: 'Welcome',
      },
    },
    SignInWithEmail: {
      screen: SignInWithEmail,
      navigationOptions: {
        title: 'Signin with Email',
        headerStyle,
      },
    },
    SignUp: {
      screen: SignUp,
      navigationOptions: {
        title: 'Sign Up',
        headerStyle,
      },
    },
  },
  {
    initialRouteName: 'SignIn',
  },
);

export default NonAuthenticatedRoutes;
