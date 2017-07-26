import { connect } from 'react-redux';

import { fetchSearchedItems } from '../../../actions/item_actions';
import SearchForm from './search_form';

const mapStateToProps = ({ items }) => ({
});

const mapDispatchToProps = dispatch => ({
  fetchSearchedItems: searchText => dispatch(fetchSearchedItems(searchText))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SearchForm);
