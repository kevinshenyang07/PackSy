import { connect } from 'react-redux';

import { fetchItem } from '../../actions/item_actions';
import ItemSpecial from './item_special';

const mapStateToProps = state => ({
  items: state.items,
});

const mapDispatchToProps = dispatch => ({
  fetchItem: (id) => dispatch(fetchItem(id)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ItemSpecial);
