import { connect } from 'react-redux';

import { selectAllItems } from '../../reducers/selectors';
import { fetchItems, fetchSearchedItems } from '../../actions/item_actions';
import FilterList from './filter_list';

const mapStateToProps = state => ({
  items: state.items,
});

// const mapDispatchToProps = dispatch => ({
//   fetchItems: () => dispatch(fetchItems()),
//   fetchSearchedItems: searchWords => dispatch(fetchSearchedItems(searchWords))
// });

export default connect(
  mapStateToProps, null
  // mapDispatchToProps
)(FilterList);
