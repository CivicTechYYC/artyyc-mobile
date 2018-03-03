import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import MapScreen from './MapScreen';

// eslint-disable-next-line no-unused-vars
function mapStateToProps(state, ownProps) {
  return {
    isLoggedIn: state.auth.isLoggedIn,
    pieceMarkers : state.pieces.markers
  };
}

const MapScreenContainer = connect(mapStateToProps)(MapScreen);
export default MapScreenContainer;
