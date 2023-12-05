// push메서드를 copy-on-write로 변경하기

function funcPush(arr, email) {
  const copyArr = arr.slice();
  copyArr.push(email);
  return copyArr;
}

function addContac(mailing_list, email) {
  const list_copy = funcPush(mailing_list, email);
  return list_copy;
}
