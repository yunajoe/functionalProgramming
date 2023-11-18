function update_shipping_icons(cart) {
  let buy_buttons = get_buy_buttons_dom(); // 모든 버튼을 가져온다
  for (let i = 0; i < buy_buttons.length; i++) {
    let button = buy_buttons[i]; // 버튼을 하나씩 다 가져온다
    let item = button.item; // 버튼에서 아이템을 가져온다
    let new_cart = add_item(cart, item); // cart에 item을 담아서 새로운 cart를 만든다
    if (gets_free_shipping(new_cart)) {
      // 새로운 cart가 무료이면은
      button.show_free_shipping_icon(); // 아이콘을 보여주고
    } else {
      button.hide_free_shipping_icon(); // 새로운 cart가 유료이면은 아이콘을 숨긴다
    }
  }
}

// 수정 후

function update_shipping_icons(cart) {
  let buy_buttons = get_buy_buttons_dom();
  let { button, item } = get_buttons(buy_buttons);
  let new_cart = add_item(cart, item);
  다;
  isFreeShopping(button, new_cart);
}

// 버튼
function get_buttons(buttons) {
  for (let i = 0; i < buttons.length; i++) {
    let button = buy_buttons[i];
    let item = button.item;
    return { button, item };
  }
}

function isFreeShopping(button, new_cart) {
  if (gets_free_shipping(new_cart)) {
    button.show_free_shipping_icon();
  } else {
    button.hide_free_shipping_icon();
  }
}
