let mailing_list = [];
function add_cart(email) {
  mailing_list.push(email);
}

function submit_form_handler(event) {
  let form = event.target;
  let email = form.elements["email"].value;
  add_contact(email);
}

// copy-on-write로 변경하기
function add_cart(mailing_list, email) {
  let copyArr = mailing_list.slice();
  copyArr.push(email);
  return copyArr;
}

function submit_form_handler(event) {
  let form = event.target;
  let email = form.elements["email"].value;
  const copyArr = add_contact(email);
}
