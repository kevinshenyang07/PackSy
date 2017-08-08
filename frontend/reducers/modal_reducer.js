import { SHOW_MODAL, HIDE_MODAL } from '../actions/modal_actions';
import merge from 'lodash/merge';

const _nullState = {
  open: {
    "DEMO": false,
    "LOG_IN": false,
    "SIGN_UP": false,
  },
};

const ModalReducer = (state=_nullState, action) => {
  Object.freeze(state);
  let nextState;

  switch (action.type) {
    case SHOW_MODAL:
      nextState = merge({}, state);
      nextState.open[action.modalType] = true;
      return nextState;
    case HIDE_MODAL:
      return _nullState;
    default:
      return state;
  }
};

export default ModalReducer;
