export const selectAllItems = ({ items }) => {
  const itemsObj = items.byId;
  return Object.keys(itemsObj).map(k => itemsObj[k]);
};
