import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';

import RootReducer from '../reducers/root_reducer';

const middlewares = [thunk];

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

if (process.env.NODE_ENV !== 'production') {
  middlewares.push(logger);
}

const configureStore = (preloadedState={}) => (
  createStore(RootReducer, preloadedState, composeEnhancers(
    applyMiddleware(...middlewares))
  )
);

export default configureStore;
