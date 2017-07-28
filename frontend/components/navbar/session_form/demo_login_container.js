import { connect } from 'react-redux';

import { signin } from '../../../actions/session_actions';
import { fetchCarts } from '../../../actions/cart_actions';
import { fetchCartItems } from '../../../actions/cart_actions';
import DemoLogin from './demo_login';

const mapStateToProps = ({ session }) => ({
  currentUser: session.currentUser,
  errors: session.errors
});

const mapDispatchToProps = (dispatch) => ({
  signin: user => dispatch(signin(user)),
  fetchCarts: () => dispatch(fetchCarts()),
  fetchCartItems: () => dispatch(fetchCartItems()),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(DemoLogin);
