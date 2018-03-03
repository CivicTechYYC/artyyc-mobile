// import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import ProfileScreen from './ProfileScreen';
// import * as PostsActions from '../../actions/posts/postsActions';

// eslint-disable-next-line no-unused-vars
function mapStateToProps(state, ownProps) {
  return {
    user: state.auth.user,
    // posts: state.posts.list,
  };
}
// eslint-disable-next-line no-unused-vars
function mapDispatchToProps(dispatch) {
  return {
    // actions: bindActionCreators(PostsActions, dispatch),
  };
}

const ProfileScreenContainer = connect(mapStateToProps, mapDispatchToProps)(ProfileScreen);
export default ProfileScreenContainer;
