import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import { fetchReview, createReview, updateReview, deleteReview
  } from '../../actions/review_actions';
import { selectCarts } from '../../reducers/selectors';
import ReviewForm from './review_form';

const mapStateToProps = (state, ownProps) => ({
  currentUser: state.session.currentUser,
  carts: state.carts,
  reviewId: ownProps.reviewId,
  itemId: ownProps.itemId,
  cartItemId: ownProps.cartItemId
});

const mapDispatchToProps = dispatch => ({
  fetchReview: id => dispatch(fetchReview(id)),
  createReview: review => dispatch(createReview(review)),
  updateReview: review => dispatch(updateReview(review)),
  deleteReview: review => dispatch(deleteReview(review))
});

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(ReviewForm));
