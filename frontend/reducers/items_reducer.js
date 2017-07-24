import { RECEIVE_ITEMS, RECEIVE_ITEM, RECEIVE_FILTERS, RECEIVE_SORT }
  from '../actions/item_actions';
import { getIdsByPrice, getIdsByFeatured, getFiltered }
  from './selectors';
import merge from 'lodash/merge';

const _nullState = {
  byId: {},
  byPrice: [],
  featured: [],
  filters: {},
  filtered: [],
};

const updateFilters = (oldFilter, newFilter) => {
  if (newFilter.sort) oldFilter.sort = newFilter.sort;
  else {
    oldFilter.featuredOnly = newFilter.featuredOnly;
    oldFilter.categories = newFilter.categories;
    oldFilter.priceRange = newFilter.priceRange;
  }
};

// reducer
const ItemsReducer = (state=_nullState, action) => {
  Object.freeze(state);
  let newState;

  switch(action.type) {
    case RECEIVE_ITEMS:
      newState = merge({}, state);
      const itemIds = Object.keys(action.items);
      newState.byId = action.items;
      newState.byPrice = getIdsByPrice(action.items);
      newState.featured = getIdsByFeatured(action.items);
      newState.filtered = itemIds;
      return newState;
    case RECEIVE_ITEM:
      const newItem = { [action.item.id]: action.item };
      return merge({}, state, { byId: newItem });
    case RECEIVE_FILTERS:
      newState = merge({}, state);
      updateFilters(newState.filters, action.filters);
      const filtered = getFiltered(newState, newState.filters);
      newState.filtered = filtered;
      return newState;
    case RECEIVE_SORT:
      newState = merge({}, state);
      newState.filters.sort = action.sort;
      newState.filtered = getFiltered(newState, newState.filters);
      return newState;
    default: {
      return state;
    }
  }
};

export default ItemsReducer;
