import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';

import RootReducer from '../reducers/root_reducer';

const middlewares = [thunk];
let composeEnhancers;

if (process.env.NODE_ENV !== 'production') {
  const createLogger = require('redux-logger');
  middlewares.push(createLogger());
  composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
} else {
  composeEnhancers = compose;
}

const configureStore = (preloadedState={}) => (
  createStore(RootReducer, preloadedState, composeEnhancers(
    applyMiddleware(...middlewares))
  )
);

export default configureStore;
