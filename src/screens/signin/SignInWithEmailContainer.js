import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import SignInWithEmailScreen from './SignInWithEmailScreen';
import * as AuthActions from '../../actions/auth/authActions';

// eslint-disable-next-line no-unused-vars
function mapStateToProps(state, ownProps) {
  return {
    isLoggedIn: state.auth.isLoggedIn,
    errors: state.auth.error,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(AuthActions, dispatch),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(SignInWithEmailScreen);
