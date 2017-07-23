import { connect } from 'react-redux';

// import { selectAllItems } from '../../reducers/selectors';
// import { fetchItems, fetchSearchedItems } from '../../actions/item_actions';
import FilterLeft from './filter_left';

const mapStateToProps = state => ({
  items: state.items,
});

// const mapDispatchToProps = dispatch => ({
//   fetchItems: () => dispatch(fetchItems()),
//   fetchSearchedItems: searchWords =>
//     dispatch(fetchSearchedItems(searchWords))
// });

export default connect(
  mapStateToProps, null
  // mapDispatchToProps
)(FilterLeft);
