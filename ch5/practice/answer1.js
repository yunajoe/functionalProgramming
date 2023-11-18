// practice1에 대한 solution
function add_item_to_cart(name, price) {
  shopping_cart = add_item(shopping_cart, name, price);
  calc_cart_total(shopping_cart);
}

function calc_cart_total(cart) {
  let total = calc_total(cart);
  set_cart_total_dom(total);
  update_shopping_icons(cart);
  update_tax_dom(total);
}

function set_cart_total_dom(total) {
  total;
}

function update_shopping_icons(cart) {
  let buy_buttons = get_buy_buttons_dom();
  for (var i = 0; i < buy_buttons.length; i++) {
    let button = buy_buttons[i];
    let item = button.item;
    let new_cart = add_item(cart, item.name, item.price);
    if (gets_free_shopping(new_cart)) {
      button.show_free_shopping_icon();
    } else {
      button.hide_free_shipping_icon();
    }
  }
}

function update_tax_dom(total) {
  set_tax_dom(calc_tax(total));
}
