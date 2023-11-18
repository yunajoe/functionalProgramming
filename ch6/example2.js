function removeItem(array, idx, count) {
  let copy = array.slice();
  copy.splice(idx, count);
  return copy;
}

function remove_item_by_name(cart, name) {
  let idx = null;
  for (let i = 0; i < new_cart.length; i++) {
    if (new_cart[i].name === name) {
      idx = 1;
    }
  }
  if (idx !== null) {
    return removeItem(cart, idx, 1);
  }
  return cart;
}
