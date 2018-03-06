import { StackNavigator } from 'react-navigation';

import MapScreen from '../screens/map/MapContainer';
import PieceDetailsScreen from '../screens/map/PieceDetails';

const MapRoutes = StackNavigator(
  {
    Map: {
      screen: MapScreen,
      navigationOptions: {},
    },
    PieceDetails: {
      screen: PieceDetailsScreen,
      navigationOptions: {},
    }
  },
  {
    initialRouteName: 'Map',
  },
);

export default MapRoutes;
