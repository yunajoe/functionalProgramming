// 액션에서 계산 빼내기

// 원래코드
function calc_cart_total() {
  for (let i = 0; i < shopping_cart.length; i++) {
    let item = shopping_cart[i];
    shopping_cart_total += item.price;
  }
  set_cart_total_dom();
  update_shipping_icons();
  update_tax_dom();
}

// step1
function calc_total() {
  //암묵적출력
  shopping_cart_total = 0;
  // 암묵적입력
  for (let i = 0; i < shopping_cart.length; i++) {
    let item = shopping_cart[i];
    // 암묵적출력
    shopping_cart_total += item.price;
  }
}

function calc_cart_total() {
  calc_total();
  set_cart_total_dom();
  update_shipping_icons();
  update_tax_dom();
}

// step2 전역변수를 지역변수로 바꾸자
function calc_total() {
  //암묵적출력
  let total = 0;
  // 암묵적입력
  for (let i = 0; i < shopping_cart.length; i++) {
    let item = shopping_cart[i];
    // 암묵적출력
    total += item.price;
  }
  return total;
}

function calc_cart_total() {
  // cal_total의 값을 전역변수에 할당
  shopping_cart_total = calc_total();
  set_cart_total_dom();
  update_shipping_icons();
  update_tax_dom();
}

// step3. 함수에서 인자를 받자
function calc_total(cart) {
  //암묵적출력
  let total = 0;
  // 암묵적입력
  for (let i = 0; i < cart.length; i++) {
    let item = cart[i];
    // 암묵적출력
    total += item.price;
  }
  return total;
}

function calc_cart_total() {
  // cal_total의 값을 전역변수에 할당
  shopping_cart_total = calc_total(shopping_cart);
  set_cart_total_dom();
  update_shipping_icons();
  update_tax_dom();
}
