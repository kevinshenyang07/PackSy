import { RECEIVE_ITEMS, RECEIVE_ITEM, RECEIVE_FILTERS, RECEIVE_SORT }
  from '../actions/item_actions';
import { selectAllCategories, getIdsByPrice, getIdsByFeatured,
  getFiltered, formatPrice } from './selectors';
import merge from 'lodash/merge';

const priceRanges = ["Any Price", "Under $50", "$50 to $100",
  "$100 to $200", "Over $200"];

const _nullState = {
  byId: {},
  byPrice: [],
  featured: [],
  filters: {
    featuredOnly: false,
    categories: [],
    priceRange: priceRanges[0],
    sort: 0,
  },
  filtered: [],
  categories: [],
  priceRanges,
};

const updateFilters = (oldFilter, newFilter) => {
  if (newFilter.sort) {
    oldFilter.sort = newFilter.sort;
  } else {
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
      if (Object.keys(action.items).length === 0) return state;
      newState = merge({}, _nullState);
      const itemIds = Object.keys(action.items);
      newState.byId = action.items;
      newState.byPrice = getIdsByPrice(action.items);
      newState.featured = getIdsByFeatured(action.items);
      const categories = selectAllCategories(newState);
      newState.categories = categories;
      newState.filters.categories = categories;
      newState.filtered = itemIds;
      formatPrice(newState.byId);
      return newState;
    case RECEIVE_ITEM:
      const newItem = { [action.item.id]: action.item };
      formatPrice(newItem);
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
