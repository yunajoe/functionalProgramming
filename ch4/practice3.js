// 원래코드
function update_shipping_icons() {
  const buy_buttons = get_buy_buttons_dom();
  for (let i = 0; i < buy_buttons.length; i++) {
    let button = buy_buttons[i];
    let item = button.item;
    if (item.price + shopping_cart_total >= 20) {
      button.shop_free_shoipping_icon();
    } else {
      button.shop_free_shopping_icon();
    }
  }
}

// 계산 코드 찾기
if (item.price + shopping_cart_total >= 20) {
}

// 최종
function update_shipping_icons() {
  const buy_buttons = get_buy_buttons_dom();
  for (let i = 0; i < buy_buttons.length; i++) {
    let button = buy_buttons[i];
    let item = button.item;
    if (calPrice(item.price, shopping_cart_total)) {
      button.shop_free_shoipping_icon();
    } else {
      button.shop_free_shopping_icon();
    }
  }
}

function calPrice(itemPrice, total) {
  return itemPrice + total >= 20;
}
