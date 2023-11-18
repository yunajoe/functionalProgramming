let shopping_cart = [];

function add_item_to_cart(name, price) {
  // array에 들어갈 아이템 생성
  let item = make_cart_item(name, price);
  // 새로운 cart array를 만들어서, element를 push해서 그 새로운 cart array를 return한다
  shopping_cart = add_item(shopping_cart, item);
  let total = calc_total(shopping_cart);
  set_cart_total_dom(total);
  update_shipping_icons(shopping_cart);
  update_tax_dom(total);
}

// 계산 (cart에 들어갈 아이템을 만드는 함수)
function make_cart_item(name, price) {
  return {
    name: name,
    price: price,
  };
}

// 계산(새로운 cart를 만들고 그 새로운 array에 push를 한다)
function add_element_last(array, ele) {
  let new_array = array.slice();
  new_array.push(ele);
  return new_array;
}

// 계산(add_element_last를 return한다)
function add_item(cart, item) {
  return add_element_last(cart, item);
}

// 액션(DOM수정은 액션)
function update_tax_dom(total) {
  set_tax_dom(calc_tax(total));
}

// 계산(암묵적 입력과 출력이 없음)
function calc_total(cart) {
  let total = 0;
  for (let i = 0; i < cart.length; i++) {
    let item = cart[i];
    total += item.price;
  }
  return total;
}

// 계산(암묵적 입력과 출력이 없음)
function gets_free_shippin(cart) {
  return calc_total(cart) >= 20;
}

// 계산(암묵적 입력과 출력이 없음)
function calc_tax(amount) {
  return amount * 0.1;
}
