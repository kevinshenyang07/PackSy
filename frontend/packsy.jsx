import React from 'react';
import ReactDOM from 'react-dom';
import injectTapEventPlugin from 'react-tap-event-plugin';

import Root from './components/root';
import configureStore from './store/store';

// for material UI
injectTapEventPlugin();

document.addEventListener('DOMContentLoaded', () => {

  let store;

  const preloadedState = {
    session: {
      currentUser: null,
      errors: []
    }
  };

  if (window.currentUser) {
    preloadedState.session.currentUser = window.currentUser;
    delete window.currentUser;
  }
  store = configureStore(preloadedState);

  const root = document.getElementById('root');

  ReactDOM.render(<Root store={store} />, root);
});
