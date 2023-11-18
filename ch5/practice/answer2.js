function update_shipping_icons(cart) {
  let buy_buttons = get_buy_buttons_dom(); // 모든 버튼을 가져온다
  for (let i = 0; i < buy_buttons.length; i++) {
    let button = buy_buttons[i]; // 버튼을 하나씩 다 가져온다
    let item = button.item; // 버튼에서 아이템을 가져온다
    gets_free_shopping_icon;
  }
}

function gets_free_shopping_icon(cart, item) {
  let new_cart = add_item(cart, item);
  return gets_free_shipping(new_cart);
}
