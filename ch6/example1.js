// example1
// copy-on-write적용전
function remove_item_by_name(cart, name) {
  let idx = null;
  for (let i = 0; i < cart.length; i++) {
    if (cart[i].name === name) {
      idx = i;
    }
  }
  if (idx !== null) {
    cart.splice(idx, 1);
  }
}

// copy-on-write적용 후
function remove_item_by_name(cart, name) {
  let new_cart = cart.slice();
  let idx = null;
  for (let i = 0; i < new_cart.length; i++) {
    if (new_cart[i].name === name) {
      idx = i;
    }
  }
  if (idx !== null) {
    new_cart.splice(idx, 1);
  }
  return new_cart;
}

// example2
// copy-on-write적용전
function delete_handler(name) {
  remove_item_by_name(shopping_cart, name);
  let total = calc_total(shopping_cart);
  set_cart_total_dom(total);
  update_shipping_icons(shopping_cart);
  update_tax_dom(total);
}

// copy-on-write적용후
function delete_handler(name) {
  let shopping_cart = remove_item_by_name(shopping_cart, name);
  let total = calc_total(shopping_cart);
  set_cart_total_dom(total);
  update_shipping_icons(shopping_cart);
  update_tax_dom(total);
}
