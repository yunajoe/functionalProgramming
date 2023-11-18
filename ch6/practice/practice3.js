let a = [1, 2, 3, 4];
let b = a.pop();
console.log(b);
console.log(a);

// 1. 읽기와 쓰기로 분리하기
function pop_element(arr) {
  return arr[arr.length - 1];
}

function pop_last(arr) {
  let arr_copy = arr.slice();
  arr_copy.pop();
  return arr_copy;
}

// 2. 값 두개를 return하는 함수로 만들기
function make_two_returns(arr) {
  let arr_copy = arr.slice();
  let pop_element = arr_copy.pop();
  return {
    arr_copy,
    pop_element,
  };
}
