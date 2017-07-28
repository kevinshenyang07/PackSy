import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import { fetchCarts } from '../../actions/cart_actions';
import CartIndex from './cart_index';

const mapStateToProps = state => ({
  currentUser: state.session.currentUser,
  carts: state.carts
});

const mapDispatchToProps = dispatch => ({
  fetchCarts: () => dispatch(fetchCarts())
});

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(CartIndex));
