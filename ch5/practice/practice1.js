// 전역변수를 읽는 부분을 인자로 바꾸기

// before
function add_item_to_cart(name, price) {
  shopping_cart = add_item(shopping_cart, name, price);
  calc_cart_total();
}

function calc_cart_total() {
  shopping_cart_total = calc_total(shopping_cart);
  set_cart_total_dom();
  update_shopping_icons(shopping_cart);
  update_tax_dom();
}

function set_cart_total_dom() {
  shopping_cart_total;
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

function update_tax_dom() {
  set_tax_dom(calc_tax(shopping_cart_total));
}

// after
function add_item_to_cart(cart, name, price) {
  let new_cart = add_item(cart, name, price);
  calc_cart_total(new_cart);
}

function calc_cart_total(cart) {
  let shopping_cart_total = calc_total(cart);
  set_cart_total_dom(shopping_cart_total);
  update_shopping_icons(cart);
  update_tax_dom(shopping_cart_total);
}

function set_cart_total_dom(total_cart_price) {
  return total_cart_price;
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

function update_tax_dom(total_cart_price) {
  set_tax_dom(calc_tax(total_cart_price));
}
