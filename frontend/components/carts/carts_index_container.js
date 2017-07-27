import { connect } from 'react-redux';

import { fetchCarts } from '../../actions/cart_actions';
import CartsIndex from './carts_index';

const mapStateToProps = state => ({
  currentUser: state.session.currentUser,
  carts: state.carts
});

const mapDispatchToProps = dispatch => ({
  fetchCarts: () => dispatch(fetchCarts())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CartsIndex);
