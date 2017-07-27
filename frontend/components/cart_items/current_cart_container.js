import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import { fetchCartItems, updateCartItem, deleteCartItem
  } from '../../actions/cart_item_actions';
import { createCart, updateCart } from '../../actions/cart_actions';
import CurrentCart from './current_cart';

const mapStateToProps = state => ({
  currentUser: state.session.currentUser,
  cartItems: state.cartItems,
});

const mapDispatchToProps = dispatch => ({
  fetchCartItems: () => dispatch(fetchCartItems()),
  updateCartItem: cartItem => dispatch(updateCartItem(cartItem)),
  deleteCartItem: id => dispatch(deleteCartItem(id)),
  createCart: cart => dispatch(createCart(cart)),
  updateCart: cart => dispatch(updateCart(cart))
});

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(CurrentCart));
