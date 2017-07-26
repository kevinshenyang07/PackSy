import { connect } from 'react-redux';
import { addCartItem } from '../../actions/cart_item_actions';
import { selectCarts } from '../../reducers/selectors';
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

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AddToCartForm);
