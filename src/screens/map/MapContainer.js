import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import MapScreen from './MapScreen';
import * as PiecesActions from '../../actions/pieces/piecesActions';

// eslint-disable-next-line no-unused-vars
function mapStateToProps(state, ownProps) {
  return {
    isLoggedIn: state.auth.isLoggedIn,
    pieces: state.pieces.list,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(PiecesActions, dispatch),
  };
}

const MapScreenContainer = connect(mapStateToProps, mapDispatchToProps)(MapScreen);
export default MapScreenContainer;
