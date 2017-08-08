import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import { signup, signin,
         signout, clearErrors } from '../../../actions/session_actions';
import { fetchCarts } from '../../../actions/cart_actions';
import { fetchCartItems } from '../../../actions/cart_item_actions';
import { showModal, hideModal } from '../../../actions/modal_actions';
import SessionForm from './session_form';


const mapStateToProps = state => ({
  currentUser: state.session.currentUser,
  errors: state.session.errors,
  carts: state.carts,
  modalOpen: state.modal.open["LOG_IN"] || state.modal.open["SIGN_UP"],
});

const mapDispatchToProps = (dispatch) => ({
  signin: user => dispatch(signin(user)),
  signup: user => dispatch(signup(user)),
  clearErrors: () => dispatch(clearErrors()),
  fetchCarts: () => dispatch(fetchCarts()),
  fetchCartItems: () => dispatch(fetchCartItems()),
  showModal: modalType => dispatch(showModal(modalType)),
  hideModal: () => dispatch(hideModal()),
});

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(SessionForm));
