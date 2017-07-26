import { combineReducers } from 'redux';

import SessionReducer from './session_reducer';
import ItemsReducer from './items_reducer';
import ReviewsReducer from './reviews_reducer';
import CartsReducer from './carts_reducer';
import CartItemsReducer from './cart_items_reducer';

const RootReducer = combineReducers({
  session: SessionReducer,
  items: ItemsReducer,
  reviews: ReviewsReducer,
  carts: CartsReducer,
  cartItems: CartItemsReducer,
});

export default RootReducer;
