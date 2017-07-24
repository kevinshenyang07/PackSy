import { connect } from 'react-redux';

// import { selectAllItems } from '../../reducers/selectors';
import { receiveSort } from '../../../actions/item_actions';
import FilterTop from './filter_top';

const mapStateToProps = state => ({
  itemsCount: state.items.filtered.length,
});

const mapDispatchToProps = dispatch => ({
  receiveSort: (sort) => dispatch(receiveSort(sort)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(FilterTop);
