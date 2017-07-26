import * as APIUtil from '../util/review_api_util';

export const RECEIVE_REVIEWS = 'RECEIVE_REVIEWS';
export const RECEIVE_REVIEW = 'RECEIVE_REVIEW';

export const receiveReviews = reviews => ({
  type: RECEIVE_REVIEWS,
  reviews
});

export const fetchReviews = itemId => dispatch => (
  APIUtil.fetchReviews(itemId)
    .then(reviews => dispatch(receiveReviews(reviews)))
);
