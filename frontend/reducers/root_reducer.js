import { combineReducers } from 'redux';

import SessionReducer from './session_reducer';
import ItemsReducer from './items_reducer';

const RootReducer = combineReducers({
  session: SessionReducer,
  items: ItemsReducer,
});

export default RootReducer;
