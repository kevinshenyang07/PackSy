import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import { addCartItem } from '../../actions/cart_item_actions';
import { fetchCarts, createCart } from '../../actions/cart_actions';
import AddToCartForm from './add_to_cart_form';

const mapStateToProps = (state, { match }) => ({
  currentUser: state.session.currentUser,
  carts: state.carts,
  itemId: match.params.itemId,
});

const mapDispatchToProps = dispatch => ({
  createCart: () => dispatch(createCart()),
  fetchCarts: () => dispatch(fetchCarts()),
  addCartItem: cartItem => dispatch(addCartItem(cartItem)),
});

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(AddToCartForm));
