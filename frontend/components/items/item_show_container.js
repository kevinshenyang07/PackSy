import { connect } from 'react-redux';

import { selectItem, } from '../../reducers/selectors';  // selectReviews
import { fetchItem } from '../../actions/item_actions';
// import { fetchReviews } from '../../actions/review_actions';
import ItemShow from './item_show';

const mapStateToProps = (state, { match }) => ({
  itemId: match.params.itemId,
  item: state.items.byId[match.params.itemId]
});

const mapDispatchToProps = dispatch => ({
  fetchItem: id => dispatch(fetchItem(id)),
  // fetchReviews: itemId => dispatch(fetchReviews(itemId))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ItemShow);
