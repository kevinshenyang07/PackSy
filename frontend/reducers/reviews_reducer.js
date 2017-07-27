import merge from 'lodash/merge';

import { RECEIVE_REVIEWS, RECEIVE_REVIEW, REMOVE_REVIEW
  } from '../actions/review_actions';

const _nullState = {
  byId: {},
};

const ReviewsReducer = (state=_nullState, action) => {
  Object.freeze(state);

  let nextState;
  switch (action.type) {
    case RECEIVE_REVIEWS:
      nextState = merge({}, _nullState);
      nextState.byId = action.reviews;
      return nextState;
    case RECEIVE_REVIEW:
      nextState = merge({}, state);
      nextState.byId[action.review.id] = action.review;
      return nextState;
    case REMOVE_REVIEW:
      nextState = merge({}, state);
      delete nextState.byId[action.id];
      return nextState;
    default:
      return state;
  }
};

export default ReviewsReducer;
