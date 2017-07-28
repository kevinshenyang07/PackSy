import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import { fetchItem } from '../../actions/item_actions';
// import { fetchCarts } from '../../actions/item_actions';
// import { fetchCartItems } from '../../actions/cart_item_actions';
import ItemShow from './item_show';

const mapStateToProps = (state, { match }) => ({
  itemId: match.params.itemId,
  item: state.items.byId[match.params.itemId],
  currentUser: state.session.currentUser,
});

const mapDispatchToProps = dispatch => ({
  fetchItem: id => dispatch(fetchItem(id)),
  // fetchCarts: () => dispatch(fetchCarts()),
  // fetchCartItems: () => dispatch(fetchCartItems()),
});

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(ItemShow));
