import { connect } from 'react-redux';

import { fetchSearchedItems } from '../../../actions/item_actions';
import SearchForm from './search_form';

const mapStateToProps = ({ items }) => ({
});

const mapDispatchToProps = dispatch => ({
  fetchSearchedItems: keywords => dispatch(fetchSearchedItems(keywords))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SearchForm);
