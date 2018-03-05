import React from 'react';
import { Provider } from 'react-redux';
import * as firebase from 'firebase';
import { Root } from 'native-base';

import { AppWithNavigationState, navReducer } from './navigation';
import getStore from './config/store';
import initalizeFirebase from './config/firebase';
import Loading from './screens/components/FullScreenLoadingView';

const store = getStore(navReducer);

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
    };

    this._handleLoadingStateChange = this._handleLoadingStateChange.bind(this);
  }

  componentDidMount() {
    initalizeFirebase(store);

    // watch the firebase database to make sure the app is connected before
    // loading the app
    const isConnectedRef = firebase.database().ref('.info/connected');
    isConnectedRef.on('value', this._handleLoadingStateChange);
  }

  _handleLoadingStateChange(snap) {
    if (snap.val() === true) {
      this.setState({ loading: false });
    }
  }

  render() {
    if (this.state.loading) {
      return <Loading />;
    } else {
      return (
        <Provider store={store}>
          <Root>
            <AppWithNavigationState store={store} />
          </Root>
        </Provider>
      );
    }
  }
}

export default App;
