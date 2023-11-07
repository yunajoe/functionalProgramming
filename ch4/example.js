// 액션, 데이터, 계산을 구분하자

// 1. 전역변수를 사용하는 것은 액션
let shopping_cart = []; // global
let shopping_cart_total = 0; // global

function add_item_to_cart(name, price) {
  // usage of global
  shopping_cart.push({
    name: name,
    price: price,
  });

  calc_cart_total();
}

// 2. DOM에서 읽는 것은 액션
function update_shopping_icons() {
  // DOM을 읽는 행위는 액션
  let buy_buttons = get_buy_buttons_dom();
  for (let i = 0; i < buy_buttons.length; i++) {
    let button = buy_buttons[i];
    let item = button.item;
    if (item.price + shopping_cart_total >= 20) {
      // dom을 바꾸는 것은 액션
      button.show_free_shipping_icon();
    } else {
      // dom을 바꾸는 것은 액션
      button.hide_free_shipping_icon();
    }
  }
}
function update_tax_dom() {
  set_tax_dom(shopping_cart_total * 0.1);
}

// 3. 전역변수를 사용하는 것은 액션
function calc_cart_total() {
  shopping_cart_total = 0;
  for (let i = 0; i < shopping_cart.length; i++) {
    let item = shopping_cart[i];
    shopping_cart_total += item.price;
  }

  set_cart_totla_dom();
  update_shopping_icons();
  update_tax_dom();
}
