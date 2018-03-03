// import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import ProfileScreen from './ProfileScreen';
import * as AuthActions from '../../actions/auth/authActions';

// eslint-disable-next-line no-unused-vars
function mapStateToProps(state, ownProps) {
  return {
    user: state.auth.user,
    // posts: state.posts.list,
  };
}
// eslint-disable-next-line no-unused-vars
function mapDispatchToProps(dispatch) {
	console.log("AuthActions", AuthActions);
  return {
    actions: bindActionCreators(AuthActions, dispatch),
  };
}

const ProfileScreenContainer = connect(mapStateToProps, mapDispatchToProps)(ProfileScreen);
export default ProfileScreenContainer;
