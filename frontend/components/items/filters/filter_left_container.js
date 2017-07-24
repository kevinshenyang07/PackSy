import { connect } from 'react-redux';

import { selectAllCategories } from '../../../reducers/selectors';
import { receiveFilters } from '../../../actions/item_actions';
import FilterLeft from './filter_left';

const mapStateToProps = state => ({
  categories: selectAllCategories(state),
});

const mapDispatchToProps = dispatch => ({
  receiveFilters: (filter) => dispatch(receiveFilters(filter)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(FilterLeft);
