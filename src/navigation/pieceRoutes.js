import { StackNavigator } from 'react-navigation';

import ListPiecesScreen from '../screens/posts/PiecesContainer';
import CreatePostContainer from '../screens/posts/create/CreatePostContainer';
import PieceDetailsScreen from '../screens/map/PieceDetails';

const PieceRoutes = StackNavigator(
  {
    ListPieces: {
      screen: ListPiecesScreen,
      navigationOptions: {},
    },
    CreateEditPost: {
      screen: CreatePostContainer,
      navigationOptions: {},
    },
    PieceDetails: {
      screen: PieceDetailsScreen,
      navigationOptions: {},
    }
  },
  {
    initialRouteName: 'ListPieces',
    // mode: 'modal',
  },
);

export default PieceRoutes;
