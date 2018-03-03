import React from 'react';
import PropTypes from 'prop-types';
import { TabNavigator } from 'react-navigation';
import Icon from 'react-native-vector-icons/Ionicons';

import OverviewScreen from '../screens/overview/OverviewContainer';

import PostRoutes from './postRoutes';
import ProfileRoutes from './profileRoutes';

const TabIcon = props => <Icon {...props} />;
TabIcon.propTypes = { tintColor: PropTypes.string.isRequired };

// ({ tintColor }) => <Icon name="md-list" size={30} color={tintColor} />,

const AuthenticatedRoutes = TabNavigator(
  {
    Overview: {
      screen: OverviewScreen,
      navigationOptions: {
        header: null,
        tabBarIcon: <TabIcon name="md-apps" size={30} />,
        title: 'Overview',
      },
    },
    Posts: {
      screen: PostRoutes,
      navigationOptions: {
        tabBarIcon: <TabIcon name="md-list" size={30} />,
        title: 'Posts',
      },
    },
    Profile: {
      screen: ProfileRoutes,
      navigationOptions: {
        header: null,
        tabBarIcon: <TabIcon name="md-person" size={30} />,
        title: 'Profile',
      },
    },
  },
  {
    initialRouteName: 'Overview',
    showIcon: true,
    tabBarOptions: {
      activeTintColor: '#e91e63',
    },
  },
);

export default AuthenticatedRoutes;
