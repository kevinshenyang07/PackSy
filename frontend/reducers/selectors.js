export const selectAllCategories = (state) => {
  const items = state.byId;
  const categories = [];
  Object.keys(items).forEach(k => {
    const item = items[k];
    if (!categories.includes(item.category)) {
      categories.push(item.category);
    }
  });
  return categories;
};

// items: {1: {}}
export const getIdsByPrice = items => {
  const ids = Object.keys(items);
  const idPrices = ids.map(k => ({id: k, price: parseFloat(items[k].price) }));
  idPrices.sort(function (a, b) {
    return a.price < b.price ? -1 : a.price > b.price ? 1 : 0; }
  );
  return idPrices.map(idPrice => idPrice.id);
};

// items: {1: {}}
export const getIdsByFeatured = items => {
  const featured = [];
  Object.keys(items).forEach(k => {
    if (items[k].featured) { featured.push(k); }
  });
  return featured;
};

// items: {1: {}}
export const getFiltered = (state, filters) => {
  const items = state.byId;
  const filtered = [];

  // left filters
  Object.keys(items).forEach(k => {
    // debugger;
    const item = items[k];
    if (filters.categories.includes(item.category)
      && inPriceRange(item, filters.priceRange)
      && (filters.featuredOnly ? item.featured : true)) {
      filtered.push(k);
    }
  });
  // top filters
  if (filters.sort === 0) return filtered;
  const byPriceFiltered = state.byPrice.filter(
    item => filtered.includes(item)
  );
  if (filters.sort === 1) byPriceFiltered.reverse();
  return byPriceFiltered;
};

const inPriceRange = (item, range) => {
  switch (range) {
    case "Under $50":
      return (item.price < 50) ? true : false;
    case "$50 to $100":
      return (item.price >= 50 && item.price < 100) ? true : false;
    case "$100 to $200":
      return (item.price >= 100 && item.price < 200) ? true : false;
    case "Over $200":
      return (item.price >= 200) ? true :false;
    default:
      return true;
  }
};
