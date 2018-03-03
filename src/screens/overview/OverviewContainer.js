import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import OverviewScreen from './OverviewScreen';
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

const OverviewScreenContainer = connect(mapStateToProps, mapDispatchToProps)(OverviewScreen);
export default OverviewScreenContainer;
