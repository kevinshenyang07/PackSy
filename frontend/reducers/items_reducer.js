import { RECEIVE_ITEMS, RECEIVE_ITEM } from '../actions/item_actions';
import merge from 'lodash/merge';

const _nullState = {
  byId: {},
  byCategory :{},
  byPrice: [],
  filtered: []
};

// items = {1: {id:1, category: 'a'}}
const getIdsByCategoy = items => {
  const byCategory = {};
  Object.keys(items).map(k => {
    const item = items[k];
    const category = item.category;
    if (category in byCategory) {
      byCategory[category].push(k);
    } else {
      byCategory[category] = [k];
    }
  });
  return byCategory;
};

// incorrect res
const getIdsByPrice = items => {
  const ids = Object.keys(items);
  const idPrices = ids.map(k => ({id: k, price: items[k].price }));
  idPrices.sort(function (a, b) {
    return a.price < b.price ? -1 : a.price > b.price ? 1 : 0; }
  );
  return idPrices.map(idPrice => idPrice.id);
};

const ItemsReducer = (state=_nullState, action) => {
  Object.freeze(state);

  switch(action.type) {
    case RECEIVE_ITEMS:
      const newState = merge({}, state);
      newState.byId = action.items;
      newState.byCategory = getIdsByCategoy(action.items);
      newState.byPrice = getIdsByPrice(action.items);
      return newState;
    case RECEIVE_ITEM:
      const newItem = { [action.item.id]: action.item };
      return merge({}, state, { byId: newItem });
    default: {
      return state;
    }
  }
};

export default ItemsReducer;
