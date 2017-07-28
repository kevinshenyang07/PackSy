import * as APIUtil from '../util/cart_api_util';
import { fetchCartItems } from './cart_item_actions';

export const RECEIVE_CARTS = 'RECEIVE_CARTS';
export const RECEIVE_CART = 'RECEIVE_CART';

export const receiveCarts = carts => ({
  type: RECEIVE_CARTS,
  carts
});

export const receiveCart = cart => ({
  type: RECEIVE_CART,
  cart
});

export const fetchCarts = () => dispatch => (
  APIUtil.fetchCarts().then(carts => dispatch(receiveCarts(carts)))
);

export const createCart = () => dispatch => (
  APIUtil.createCart().then(cart => {
    dispatch(receiveCart(cart));
    dispatch(fetchCartItems());
  })
);

export const updateCart = cart => dispatch => (
  APIUtil.updateCart(cart).then(resp => dispatch(receiveCart(resp)))
);
