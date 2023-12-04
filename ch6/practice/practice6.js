// 문제

let mailing_list = [];

function add_concat(email) {
  mailing_list.push(email);
}

function submit_form_handler(event) {
  let form = event.target;
  let email = form.elements["email"].value;
  add_concat(email);
}

// copy-on-write로 바꾸기
function add_concat(mailing_list_arguments, email) {
  const mailing_list_arguments_copy = mailing_list_arguments.slice();
  mailing_list_arguments_copy.push(email);
  return mailing_list_arguments_copy;
}

function submit_form_handler(event) {
  let form = event.target;
  let email = form.elements["email"].value;
  const mailing_list = add_concat(mailing_list, email);
  return mailing_list;
}
