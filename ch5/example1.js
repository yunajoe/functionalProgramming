// 설계란 엉켜있는 코드를 푸는 것이다

// before
// 이 함수는 cart, item 구조를 모두 알고 있다. cart와 item으로 분리해보자
function add_item(cart, name, price) {
  // cart구조를 알 수 있다
  let new_cart = cart.slice();
  new_cart.push({
    // item구조를 알수 있다
    name: name,
    price: price,
  });
  return new_cart;
}

// 1차 수정
function make_cart_item(name, price) {
  return {
    name: name,
    price: price,
  };
}

// cart는 일반적이지 않은 이름이다
function add_item(cart, item) {
  let new_cart = cart.slice();
  new_cart.push(item);
  return new_cart;
}

add_item(shopping_cart, make_cart_item("shose", 200));

// 2차 수정
function make_cart_item(name, price) {
  return {
    name: name,
    price: price,
  };
}

// cart=> array로 일반적인 이름으로 변경했다
function add_element_last(array, elem) {
  const new_array = array.slice();
  new_array.push(elem);
  return new_array;
}

function add_item(cart, item) {
  return add_element_last(cart, item);
}

add_item(shopping_cart, make_cart_item("shose", 200));

// conclusion
// A => 배열 유틸리티
function add_element_last(array, elem) {
  const new_array = array.slice();
  new_array.push(elem);
  return new_array;
}

// cart에 대한 동작
function add_item(cart, item) {
  return add_element_last(cart, item);
}

// Item에 대한 동작
function make_cart_item(name, price) {
  return {
    name: name,
    price: price,
  };
}

// cart에 대한 동작, Item에 대한 동작, 비즈니스 규칙
function calc_total(cart) {
  let total = 0;
  for (let i = 0; i < cart.length; i++) {
    let item = cart[i];
    total += item.price;
  }
  return total;
}

// business 규칙
function gets_free_shopping(cart) {
  return calc_total(cart) >= 20;
}

function calc_tax(amount) {
  return amount * 0.1;
}
