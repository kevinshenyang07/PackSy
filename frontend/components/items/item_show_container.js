import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import { fetchItem } from '../../actions/item_actions';

import ItemShow from './item_show';

const mapStateToProps = (state, { match }) => ({
  itemId: match.params.itemId,
  item: state.items.byId[match.params.itemId],
  currentUser: state.session.currentUser,
});

const mapDispatchToProps = dispatch => ({
  fetchItem: id => dispatch(fetchItem(id)),
});

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(ItemShow));
