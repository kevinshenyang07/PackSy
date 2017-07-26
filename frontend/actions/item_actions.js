import * as APIUtil from '../util/item_api_util';

export const RECEIVE_ITEMS = 'RECEVIE_ITEMS';
export const RECEIVE_ITEM = 'RECEIVE_ITEM';
export const RECEIVE_FILTERS = 'RECEIVE_FILTERS';
export const RECEIVE_SORT = 'RECEIVE_SORT';
export const RECEIVE_SEARCH_TEXT = 'RECEIVE_SEARCH_TEXT';

// sync actions
export const receiveItems = items => ({
  type: RECEIVE_ITEMS,
  items
});

export const receiveItem = item => ({
  type: RECEIVE_ITEM,
  item
});

// filter = { featuredOnly: false, categories: [], priceRange: 0}
export const receiveFilters = filters => ({
  type: RECEIVE_FILTERS,
  filters
});

// sort = -1 (not sorted), 0 (low to high), 1 (high to low)
export const receiveSort = sort => ({
  type: RECEIVE_SORT,
  sort
});

export const receiveSearchText = searchText => ({
  type: RECEIVE_SEARCH_TEXT,
  searchText
});

// async actions
export const fetchItems = () => dispatch => (
  APIUtil.fetchItems().then(items => dispatch(receiveItems(items)))
);

export const fetchItem = id => dispatch => (
  APIUtil.fetchItem(id).then(item => dispatch(receiveItem(item)))
);

export const fetchSearchedItems = searchText => dispatch => (
  APIUtil.fetchSearchedItems(searchText)
    .then(items =>{
      dispatch(receiveItems(items));
      dispatch(receiveSearchText(searchText));
    })
);
