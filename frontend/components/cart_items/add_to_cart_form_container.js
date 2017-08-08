import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import { addCartItem } from '../../actions/cart_item_actions';
import { fetchCarts, createCart, updateCart } from '../../actions/cart_actions';
import { showModal } from '../../actions/modal_actions';
import AddToCartForm from './add_to_cart_form';

const mapStateToProps = (state, { match }) => ({
  currentUser: state.session.currentUser,
  carts: state.carts,
  itemId: match.params.itemId,
});

const mapDispatchToProps = dispatch => ({
  createCart: () => dispatch(createCart()),
  fetchCarts: () => dispatch(fetchCarts()),
  updateCart: cart => dispatch(updateCart(cart)),
  addCartItem: cartItem => dispatch(addCartItem(cartItem)),
  showModal: () => dispatch(showModal("LOG_IN")),
});

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(AddToCartForm));
