import { connect } from 'react-redux';

import { fetchItems, receiveFilters } from '../../../actions/item_actions';
import FilterLeft from './filter_left';

const mapStateToProps = state => ({
  filters: state.items.filters,
  categories: state.items.categories,
  priceRanges: state.items.priceRanges,
});

const mapDispatchToProps = dispatch => ({
  fetchItems: () => dispatch(fetchItems()),
  receiveFilters: (filter) => dispatch(receiveFilters(filter)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(FilterLeft);
