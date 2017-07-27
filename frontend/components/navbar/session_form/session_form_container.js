import { connect } from 'react-redux';
import { signup, signin,
         signout, clearErrors } from '../../../actions/session_actions';
import { fetchCarts, createCart } from '../../../actions/cart_actions';
import SessionForm from './session_form';

const mapStateToProps = state => ({
  currentUser: state.session.currentUser,
  errors: state.session.errors,
  carts: state.carts,
});

const mapDispatchToProps = (dispatch) => ({
  signin: user => dispatch(signin(user)),
  signup: user => dispatch(signup(user)),
  clearErrors: () => dispatch(clearErrors()),
  fetchCarts: () => dispatch(fetchCarts()),
  createCart: () => dispatch(createCart()),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SessionForm);
