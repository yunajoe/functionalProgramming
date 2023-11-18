// copy-on-write를 이용하여 push를 하자
function push(array, elem) {
  let arr_copy = array.slice();
  arr_copy.push(elem);
  return arr_copy;
}

// 위에서 만든 push함수를 사용해보자
function add_contact(mailing_list, email) {
  let list_copy = mailing_list.slice();
  list_copy.push(email);
  return list_copy;
}

function add_contact(mailing_list, email) {
  const copy = push(mailing_list, email);
  return copy;
}
