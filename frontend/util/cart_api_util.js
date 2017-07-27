export const fetchCarts = () => {
  return $.ajax({
    method: 'GET',
    url: 'api/carts'
  });
};

export const createCart = () => {
  return $.ajax({
    method: 'POST',
    url: 'api/carts',
    data: { }
  });
};

export const updateCart = cart => {
  return $.ajax({
    method: 'PATCH',
    url: `api/carts/${cart.id}`,
    data: { cart }
  });
};
