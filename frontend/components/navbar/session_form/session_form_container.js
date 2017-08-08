import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import { signup, signin,
         signout, clearErrors } from '../../../actions/session_actions';
import { fetchCarts } from '../../../actions/cart_actions';
import { fetchCartItems } from '../../../actions/cart_item_actions';
import { showModal, hideModal } from '../../../actions/modal_actions';
import SessionForm from './session_form';


const findOpenModal = state => {
  const open = state.modal.open;
  const opened = ["DEMO", "LOG_IN", "SIGN_UP"].filter(t => open[t])[0];
  const logIn = (opened === "SIGN_UP") ? false : true;
  return { opened, logIn };
};

const mapStateToProps = state => {
  const modalState = findOpenModal(state);
  return {
    currentUser: state.session.currentUser,
    errors: state.session.errors,
    carts: state.carts,
    modalOpen: modalState.opened,
    logIn: modalState.logIn,
  };
};

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
