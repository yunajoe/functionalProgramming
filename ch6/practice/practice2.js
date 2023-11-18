// 읽기와 쓰기 동작으로 분리하기

function first_element(array) {
  return array[0];
}

function drop_first(array) {
  const array_copy = array.slice();
  array_copy.shift();
  return array_copy;
}

// return문 2개 만들기
function shift(array) {
  let array_copy = array.slice();
  let first = array_copy.shift();
  return {
    first: first,
    array: array_copy,
  };
}

function shift(array) {
  return {
    first: first_element(array),
    array: drop_first(array),
  };
}
