import React from 'react';
import PropTypes from 'prop-types';
import { TabNavigator } from 'react-navigation';
import Icon from 'react-native-vector-icons/Ionicons';

import MapRoutes from './mapRoutes';

const TabIcon = props => <Icon {...props} />;
TabIcon.propTypes = { tintColor: PropTypes.string.isRequired };

// ({ tintColor }) => <Icon name="md-list" size={30} color={tintColor} />,

const AuthenticatedRoutes = TabNavigator(
  {
    Map: {
      screen: MapRoutes,
      navigationOptions: {
        tabBarIcon: <TabIcon name="md-map" size={30} />,
        title: 'Map',
      },
    },
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
