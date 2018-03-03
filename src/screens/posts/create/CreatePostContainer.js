import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import CreatePostScreen from './CreatePostScreen';
import * as PostsActions from '../../../actions/posts/postsActions';

// eslint-disable-next-line no-unused-vars
function mapStateToProps(state, ownProps) {
  const { params } = ownProps.navigation.state;

  return {
    post: params && params.id ? state.posts.list.find(p => p.id === params.id) : {},
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(PostsActions, dispatch),
  };
}

const CreatePostsContainer = connect(mapStateToProps, mapDispatchToProps)(CreatePostScreen);
export default CreatePostsContainer;
