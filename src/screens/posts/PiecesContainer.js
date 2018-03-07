import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import PiecesScreen from './PiecesScreen';
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

const PiecesScreenContainer = connect(mapStateToProps, mapDispatchToProps)(PiecesScreen);
export default PiecesScreenContainer;
