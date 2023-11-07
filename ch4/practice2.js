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

// 1. 계산 코드 찾기
function update_shipping_icons() {
  const buy_buttons = get_buy_buttons_dom();
}

function HideOrShowButton() {
  for (let i = 0; i < buy_buttons.length; i++) {
    let button = buy_buttons[i];
    let item = button.item;
    if (item.price + shopping_cart_total >= 20) {
      button.show_free_shoipping_icon();
    } else {
      button.hide_free_shopping_icon();
    }
  }
}

// 2. 새로운 함수에서 암묵적 입력과, 출력을 찾는다
function HideOrShowButton() {
  // buy_buttons는 압묵적입력
  for (let i = 0; i < buy_buttons.length; i++) {
    let button = buy_buttons[i];
    let item = button.item;
    // shopping_cart_total은 암묵적 입력
    if (item.price + shopping_cart_total >= 20) {
      button.show_free_shoipping_icon();
    } else {
      button.hide_free_shopping_icon();
    }
  }
}

// 3. 암묵적 입력은 인자로, 출력은 return으로 바꾼다
function HideOrShowButton(buttonsArr, total) {
  for (let i = 0; i < buttonsArr.length; i++) {
    let button = buttonsArr[i];
    let item = button.item;
    if (item.price + total >= 20) {
      button.show_free_shoipping_icon();
    } else {
      button.hide_free_shopping_icon();
    }
  }
}

// 최종
function update_shipping_icons() {
  const buy_buttons = get_buy_buttons_dom();
  HideOrShowButton(buy_buttons);
}

function HideOrShowButton(buttonsArr) {
  for (let i = 0; i < buttonsArr.length; i++) {
    let button = buttonsArr[i];
    let item = button.item;
    if (item.price + shopping_cart_total >= 20) {
      button.show_free_shoipping_icon();
    } else {
      button.hide_free_shopping_icon();
    }
  }
}
