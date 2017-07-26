import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import { addCartItem } from '../../actions/cart_item_actions';
import { fetchCarts } from '../../actions/cart_actions';
import AddToCartForm from './add_to_cart_form';

const mapStateToProps = state => ({
  currentUser: state.session.currentUser,
  carts: state.carts
});

const mapDispatchToProps = dispatch => ({
  addCartItem: cartItem => dispatch(addCartItem(cartItem)),
  fetchCarts: () => dispatch(fetchCarts())
});

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(AddToCartForm));
