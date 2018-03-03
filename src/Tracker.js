import React from 'react';
import { Provider } from 'react-redux';

import { Root } from 'native-base';
import { AppWithNavigationState, navReducer } from './navigation';
import getStore from './config/store';
import initalizeFirebase from './config/firebase';

const store = getStore(navReducer);

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    initalizeFirebase(store);
  }

  render() {
    return (
      <Provider store={store}>
        <Root>
          <AppWithNavigationState store={store} />
        </Root>
      </Provider>
    );
  }
}

export default App;
