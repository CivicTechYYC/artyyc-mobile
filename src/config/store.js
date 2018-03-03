import { createStore, applyMiddleware } from 'redux';

import thunk from 'redux-thunk';
import getRootReducer from '../reducers';

export default function getStore(navReducer) {
  const middlewares = [thunk];

  // if (process.env.NODE_ENV === 'development') {
  //   const { logger } = require('redux-logger');
  //   middlewares.push(logger);
  // }

  const store = createStore(
    getRootReducer(navReducer),
    undefined,
    applyMiddleware(...middlewares),
  );

  return store;
}
