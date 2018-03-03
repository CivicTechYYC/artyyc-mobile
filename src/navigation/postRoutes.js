import { StackNavigator } from 'react-navigation';

import ListPostsScreen from '../screens/posts/PostsContainer';
import CreatePostContainer from '../screens/posts/create/CreatePostContainer';

const PostRoutes = StackNavigator(
  {
    ListPosts: {
      screen: ListPostsScreen,
      navigationOptions: {},
    },
    CreateEditPost: {
      screen: CreatePostContainer,
      navigationOptions: {},
    },
  },
  {
    initialRouteName: 'ListPosts',
    // mode: 'modal',
  },
);

export default PostRoutes;
