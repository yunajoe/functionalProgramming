// 명시적, 암시적 입출력

let total = 0;

// amount는 명시적 입력
function add_to_total(amount) {
  // 콘솔은 암묵적 출력
  console.log(total);
  // 전역변수를 바꾸는 것은 암묵적 출력
  total += amount;
  // return값은 명시적 출력
  return total;
}
