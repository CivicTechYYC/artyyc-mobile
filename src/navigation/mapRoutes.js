import { StackNavigator } from 'react-navigation';

import MapScreen from '../screens/map/MapContainer';

const MapRoutes = StackNavigator(
  {
    Map: {
      screen: MapScreen,
      navigationOptions: {},
    }
  },
  {
    initialRouteName: 'Map',
  },
);

export default MapRoutes;
