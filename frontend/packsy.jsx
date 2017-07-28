import React from 'react';
import ReactDOM from 'react-dom';
import injectTapEventPlugin from 'react-tap-event-plugin';

import Root from './components/root';
import configureStore from './store/store';

// import merge from 'lodash/merge';
// import { fetchItem } from './actions/cart_item_actions';
import { signout } from './actions/session_actions';
import { createCart, fetchCarts, updateCart } from './actions/cart_actions';
import { addCartItem, fetchCartItems } from './actions/cart_item_actions';

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

  window.getState = store.getState;
  window.dispatch = store.dispatch;
  window.createCart = createCart;
  window.fetchCarts = fetchCarts;
  window.addCartItem = addCartItem;
  window.fetchCartItems = fetchCartItems;
  window.signout = signout;

  ReactDOM.render(<Root store={store} />, root);
});
