import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import { signout } from '../../../actions/session_actions';
import { fetchCarts } from '../../../actions/cart_actions';
import { fetchCartItems } from '../../../actions/cart_item_actions';
import Greetings from './greetings';

const mapStateToProps = state => ({
  currentUser: state.session.currentUser,
  cartItemCount: Object.keys(state.cartItems).length,
  cartLoaded: Boolean(Object.keys(state.carts).length !== 0)
});

const mapDispatchToProps = dispatch => ({
  fetchCartItems: () => dispatch(fetchCartItems()),
  fetchCarts: () => dispatch(fetchCarts()),
  signout: () => dispatch(signout()),
});

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(Greetings));
