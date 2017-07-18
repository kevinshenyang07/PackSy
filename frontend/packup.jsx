import React from 'react';
import ReactDOM from 'react-dom';

import Root from './components/root';
import configureStore from './store/store';

// import { signin, signup, signout } from './util/session_api_util';
// import { receiveErrors } from './actions/session_actions';
// import merge from 'lodash/merge';

document.addEventListener('DOMContentLoaded', () => {

  let store;
  if (window.currentUser) {
    const preloadedState = { session: { currentUser: window.currentUser }};
    store = configureStore(preloadedState);
    delete window.currentUser;
  } else {
    store = configureStore();
  }

  const root = document.getElementById('root');

  // window.getState = store.getState;
  // window.dispatch = store.dispatch;
  // window.receiveErrors = receiveErrors;
  // window.merge = merge;
  // ReactDOM.render(<h2>Welcome to PackUp</h2>, root);

  ReactDOM.render(<Root store={store} />, root);
});
