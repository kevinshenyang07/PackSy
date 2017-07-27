import { RECEIVE_ITEMS, RECEIVE_ITEM, RECEIVE_FILTERS, RECEIVE_SORT,
  } from '../actions/item_actions';
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
  let nextState;

  switch(action.type) {
    case RECEIVE_ITEMS:
      if (Object.keys(action.items).length === 0) return state;
      nextState = merge({}, _nullState);
      const itemIds = Object.keys(action.items);
      nextState.byId = action.items;
      nextState.byPrice = getIdsByPrice(action.items);
      nextState.featured = getIdsByFeatured(action.items);
      const categories = selectAllCategories(nextState);
      nextState.categories = categories;
      nextState.filters.categories = categories;
      nextState.filtered = itemIds;
      formatPrice(nextState.byId);
      return nextState;
    case RECEIVE_ITEM:
      const newItem = { [action.item.id]: action.item };
      formatPrice(newItem);
      return merge({}, state, { byId: newItem });
    case RECEIVE_FILTERS:
      nextState = merge({}, state);
      updateFilters(nextState.filters, action.filters);
      const filtered = getFiltered(nextState, nextState.filters);
      nextState.filtered = filtered;
      return nextState;
    case RECEIVE_SORT:
      nextState = merge({}, state);
      nextState.filters.sort = action.sort;
      nextState.filtered = getFiltered(nextState, nextState.filters);
      return nextState;
    default: {
      return state;
    }
  }
};

export default ItemsReducer;
