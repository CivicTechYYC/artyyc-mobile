import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { StackNavigator, addNavigationHelpers } from 'react-navigation';
import { connect } from 'react-redux';

import AuthenticatedRoutes from './authenticatedRoutes';
import UnAuthedRoutes from './unAuthedRoutes';

const AppNavigator = StackNavigator(
  {
    SignedIn: {
      screen: AuthenticatedRoutes,
      navigationOptions: {
        gesturesEnabled: false,
        header: null,
      },
    },
    SignedOut: {
      screen: UnAuthedRoutes,
      navigationOptions: {
        gesturesEnabled: false,
        headerMode: 'none',
      },
    },
  },
  {
    headerMode: 'none',
    mode: 'modal',
    lazy: true,
  },
);

export function navReducer(state, action) {
  const newState = AppNavigator.router.getStateForAction(action, state);
  return newState || state;
}

@connect(state => ({
  nav: state.nav,
  auth: state.auth,
}))

export class AppWithNavigationState extends Component {
  render() {
    const { auth } = this.props.store.getState();
    return (
      <AppNavigator
        navigation={addNavigationHelpers({
          initialRouteName: auth.isLoggedIn ? 'SignedIn' : 'SignedOut',
          dispatch: this.props.dispatch,
          state: this.props.nav,
        })}
      />
    );
  }
}

AppWithNavigationState.propTypes = {
  store: PropTypes.shape({
    getState: PropTypes.func.isRequired,
  }).isRequired,
  dispatch: PropTypes.func,
  nav: PropTypes.shape({
    index: PropTypes.number,
    routes: PropTypes.array,
  }),
};

AppWithNavigationState.defaultProps = {
  dispatch: () => {},
  nav: {},
};

