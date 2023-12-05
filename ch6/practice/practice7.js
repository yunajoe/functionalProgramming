// 문제. 읽기와 쓰기로 분리하기.

// 읽기 (데이터를 읽는다 or 데이터를 변경하지 않는다 )
function readFuncion(array) {
  return array[array.length - 1];
}

// 쓰기 (데이터를 변경한다)
function writeFunction(array) {
  array.pop();
}

// 문제. 값 두개를 return하는 함수 만들기
function popMethod(array) {
  const copyArray = array.slice();
  const popValue = copyArray.pop();

  return {
    popValue: popValue,
    popArray: copyArray,
  };
}
