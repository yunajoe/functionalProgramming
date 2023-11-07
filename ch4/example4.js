function add_time_to_cart(name, price) {
  // shopping_card라는 전역변수를 읽고 있다 => 입력
  // push로 배열을 바꾸고 있다 =전역배열을 바꾸면 함수 밖으로 데이터가 나가기 때문에 출력
  shopping_cart.push({
    name: name,
    price: price,
  });
  calc_cart_total();
}

// 수정 1
function add_item(name, price) {
  shopping_cart.push({
    name: name,
    price: price,
  });
}

function add_time_to_cart(name, price) {
  add_item(name, price);
  calc_cart_total();
}

// 수정2
function add_item(cart, name, price) {
  // 전역변수 대신 인자를 추가한다
  cart.push({
    name: name,
    price: price,
  });
}

function add_time_to_cart(name, price) {
  // 전역변수를 인자로 넘긴다
  add_item(shopping_cart, name, price);
  calc_cart_total();
}

// 수정3
function add_item(cart, name, price) {
  // 복사본 만들기
  let new_cart = cart.slice();
  new_cart.push({
    name: name,
    price: price,
  });
  return new_cart;
}

function add_time_to_cart(name, price) {
  // 전역변수로 할당받는다
  shopping_cart = add_item(shopping_cart, name, price);
  calc_cart_total();
}
