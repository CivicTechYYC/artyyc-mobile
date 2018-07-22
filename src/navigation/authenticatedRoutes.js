import React from 'react';
import PropTypes from 'prop-types';
import { TabNavigator } from 'react-navigation';
import Icon from 'react-native-vector-icons/Ionicons';

import PieceRoutes from './pieceRoutes';
import ProfileRoutes from './profileRoutes';
import MapRoutes from './mapRoutes';


const TabIcon = props => <Icon {...props} />;
TabIcon.propTypes = { tintColor: PropTypes.string.isRequired };

// ({ tintColor }) => <Icon name="md-list" size={30} color={tintColor} />,

const AuthenticatedRoutes = TabNavigator(
  {
    Map: {
      screen: MapRoutes,
      navigationOptions: ({ navigation }) => {
        return {
          tabBarIcon: <TabIcon name="md-map" size={30} />,
          title: 'Map',
          tabBarOnPress: ({previousScene, scene, jumpToIndex}) => {
            const { route } = scene;
            navigation.navigate(scene.route.routes[0].routeName);
          }
        }
      },
    },
    Pieces: {
      screen: PieceRoutes,
      navigationOptions: ({ navigation }) => {
        return {
          tabBarIcon: <TabIcon name="md-list" size={30} />,
          title: 'Art Pieces',
          tabBarOnPress: ({previousScene, scene, jumpToIndex}) => {
            const { route } = scene;
            navigation.navigate(scene.route.routes[0].routeName);
          }
        }
      },
    },
    // Profile: {
    //   screen: ProfileRoutes,
    //   navigationOptions: {
    //     header: null,
    //     tabBarIcon: <TabIcon name="md-person" size={30} />,
    //     title: 'Profile',
    //   },
    // },
  },
  {
    initialRouteName: 'Map',
    showIcon: true,
    tabBarOptions: {
      activeTintColor: '#e91e63',
    },
  },
);

export default AuthenticatedRoutes;

