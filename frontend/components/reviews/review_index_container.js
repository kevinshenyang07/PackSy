import { connect } from 'react-redux';

import { selectReviews } from '../../reducers/selectors';
import { fetchReviews, deleteReview } from '../../actions/review_actions';
import ReviewIndex from './review_index';

const mapStateToProps = (state, ownProps) => ({
  reviews: state.reviews,
  currentUser: state.session.currentUser,
  itemId: ownProps.itemId,
});

const mapDispatchToProps = dispatch => ({
  fetchReviews: itemId => dispatch(fetchReviews(itemId)),
  deleteReview: reviewId => dispatch(deleteReview(reviewId)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ReviewIndex);
