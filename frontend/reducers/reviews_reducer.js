import merge from 'lodash/merge';

import { RECEIVE_REVIEWS } from '../actions/review_actions';

const _nullState = {
  byId: {},
};

const ReviewsReducer = (state=_nullState, action) => {
  Object.freeze(state);

  let newState;
  switch (action.type) {
    case RECEIVE_REVIEWS:
      newState = merge({}, _nullState);
      newState.byId = action.reviews;
      return newState;
    default:
      return state;
  }
};

export default ReviewsReducer;
