import { StackNavigator } from 'react-navigation';

import ProfileScreen from '../screens/profile/ProfileScreen';

// const headerStyle = {
//   marginTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
// };

const ProfileRoutes = StackNavigator(
  {
    ProfileMain: {
      screen: ProfileScreen,
      navigationOptions: {
        header: null,
      },
    },
  },
  {
    initialRouteName: 'ProfileMain',
  },
);

export default ProfileRoutes;
