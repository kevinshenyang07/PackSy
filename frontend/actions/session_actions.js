import * as APIUtil from '../util/session_api_util';

export const RECEIVE_CURRENT_USER = "RECEIVE_CURRENT_USER";
export const RECEIVE_ERRORS = 'RECEIVE_ERRORS';
export const CLEAR_ERRORS = 'CLEAR_ERRORS';

// sync actions
export const receiveCurrentUser = currentUser => ({
  type: RECEIVE_CURRENT_USER,
  currentUser
});

export const receiveErrors = errors => ({
  type: RECEIVE_ERRORS,
  errors
});

export const clearErrors = () => ({
  type: CLEAR_ERRORS,
  errors: []
});

// async actions
export const signup = user => dispatch => (
  APIUtil.signup(user).then(
    usr => dispatch(receiveCurrentUser(usr)),
    err => dispatch(receiveErrors(err))
  )
);

export const signin = user => dispatch => (
  APIUtil.signin(user).then(
    usr => dispatch(receiveCurrentUser(usr)),
    err => dispatch(receiveErrors)
  )
);

export const signout = () => dispatch => (
  APIUtil.signout().then(
    usr => dispatch(receiveCurrentUser(null))
  )
);
