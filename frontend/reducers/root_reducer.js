import { combineReducers } from 'redux';

import SessionReducer from './session_reducer';
import ItemsReducer from './items_reducer';
import ReviewsReducer from './reviews_reducer';

const RootReducer = combineReducers({
  session: SessionReducer,
  items: ItemsReducer,
  reviews: ReviewsReducer,
});

export default RootReducer;
