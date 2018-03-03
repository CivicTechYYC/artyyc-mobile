import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import PostsScreen from './PostsScreen';
import * as PostsActions from '../../actions/posts/postsActions';

// eslint-disable-next-line no-unused-vars
function mapStateToProps(state, ownProps) {
  return {
    isLoggedIn: state.auth.isLoggedIn,
    posts: state.posts.list,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(PostsActions, dispatch),
  };
}

const PostsScreenContainer = connect(mapStateToProps, mapDispatchToProps)(PostsScreen);
export default PostsScreenContainer;
