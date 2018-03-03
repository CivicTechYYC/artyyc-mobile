import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import SignInScreen from './SignInScreen';
import * as AuthActions from '../../actions/auth/authActions';

// eslint-disable-next-line no-unused-vars
function mapStateToProps(state, ownProps) {
  return {
    isLoggedIn: state.auth.isLoggedIn,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(AuthActions, dispatch),
  };
}

const SignInScreenContainer = connect(mapStateToProps, mapDispatchToProps)(SignInScreen);
export default SignInScreenContainer;
