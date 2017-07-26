import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

// import { selectAllItems } from '../../reducers/selectors';
import { fetchItems, fetchSearchedItems } from '../../actions/item_actions';
import ItemIndex from './item_index';

const mapStateToProps = state => ({
  items: state.items,
});

const mapDispatchToProps = dispatch => ({
  fetchItems: () => dispatch(fetchItems()),
  fetchSearchedItems: searchText => dispatch(fetchSearchedItems(searchText))
});

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(ItemIndex));
