export const fetchReviews = itemId => {
  return $.ajax({
     method: 'GET',
     url: `api/items/${itemId}/reviews`,
  });
};
