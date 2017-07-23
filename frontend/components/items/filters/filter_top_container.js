import { connect } from 'react-redux';

// import { selectAllItems } from '../../reducers/selectors';
// import { fetchItems, fetchSearchedItems } from '../../actions/item_actions';
import FilterTop from './filter_top';

const mapStateToProps = state => ({
  itemsCount: state.items.filtered.length,
});

// const mapDispatchToProps = dispatch => ({
//   fetchItems: () => dispatch(fetchItems()),
//   fetchSearchedItems: searchWords =>
//     dispatch(fetchSearchedItems(searchWords))
// });

export default connect(
  mapStateToProps, null
  // mapDispatchToProps
)(FilterTop);
