import { connect } from 'react-redux';

import { signin } from '../../../actions/session_actions';
import { fetchCarts } from '../../../actions/cart_actions';
import { fetchCartItems } from '../../../actions/cart_item_actions';
import { showModal, hideModal } from '../../../actions/modal_actions';
import DemoLogin from './demo_login';

const mapStateToProps = ({ session, modal }) => ({
  currentUser: session.currentUser,
  errors: session.errors,
  modalOpen: modal.open['DEMO'],
});

const mapDispatchToProps = (dispatch) => ({
  signin: user => dispatch(signin(user)),
  fetchCarts: () => dispatch(fetchCarts()),
  fetchCartItems: () => dispatch(fetchCartItems()),
  showModal: () => dispatch(showModal("DEMO")),
  hideModal: () => dispatch(hideModal()),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(DemoLogin);
