import React from 'react';
import ReactDOM from 'react-dom';
import injectTapEventPlugin from 'react-tap-event-plugin';

import Root from './components/root';
import configureStore from './store/store';

// import merge from 'lodash/merge';

injectTapEventPlugin();

document.addEventListener('DOMContentLoaded', () => {

  let store;

  const preloadedState = {
    session: {
      currentUser: null,
      errors: []
  }};

  if (window.currentUser) {
    preloadedState.session.currentUser = window.currentUser;
    delete window.currentUser;
  }
  store = configureStore(preloadedState);

  const root = document.getElementById('root');

  // window.getState = store.getState;
  // window.dispatch = store.dispatch;
  // window.merge = merge;

  ReactDOM.render(<Root store={store} />, root);
});
