import * as APIUtil from '../util/cart_item_api_util';

export const RECEIVE_CART_ITEM = 'RECEIVE_CART_ITEM';
export const RECEIVE_CART_ITEMS = 'RECEIVE_CART_ITEMS';
export const REMOVE_CART_ITEM = 'DELETE_CART_ITEM';


//sync actions
export const receiveCartItem = cartItem => ({
  type: RECEIVE_CART_ITEM,
  cartItem,
});

export const receiveCartItems = cartItems => ({
  type: RECEIVE_CART_ITEMS,
  cartItems,
});

export const removeCartItem = cartItem => ({
  type: REMOVE_CART_ITEM,
  cartItem,
});


// async actions
export const addCartItem = cartItem => dispatch => (
  APIUtil.addCartItem(cartItem).then(resp =>
    dispatch(receiveCartItem(resp)))
);

export const fetchCartItems = () => dispatch => (
  APIUtil.fetchCartItems().then(resp =>
    dispatch(receiveCartItems(resp)))
);

export const updateCartItem = cartItem => dispatch => (
  APIUtil.updateCartItem(cartItem).then(resp =>
    dispatch(receiveCartItem(resp)))
);

export const deleteCartItem = id => dispatch => (
  APIUtil.deleteCartItem(id).then(resp =>
    dispatch(removeCartItem(resp)))
);
