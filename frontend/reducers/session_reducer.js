import merge from 'lodash/merge';

import { RECEIVE_CURRENT_USER,
         RECEIVE_ERRORS,
         CLEAR_ERRORS } from '../actions/session_actions';

const _nullSessionState = Object.freeze({
  currentUser: null,
  errors: []
});

const SessionReducer = (state=_nullSessionState, action) => {
  Object.freeze(state);

  switch (action.type) {
    case RECEIVE_CURRENT_USER:
      return merge({}, _nullSessionState,
        { currentUser: action.currentUser });
    case RECEIVE_ERRORS:
      return merge({}, _nullSessionState,
        { errors: action.errors });
    case CLEAR_ERRORS:
      return merge({}, _nullSessionState);
    default:
      return state;
  }
};

export default SessionReducer;
