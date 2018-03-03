import { StackNavigator } from 'react-navigation';

import ProfileContainer from '../screens/profile/ProfileContainer';

// const headerStyle = {
//   marginTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
// };

const ProfileRoutes = StackNavigator(
  {
    ProfileMain: {
      screen: ProfileContainer,
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
