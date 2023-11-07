function update_tax_dom() {
  let total = cal_total(shopping_cart_total);
  set_tax_dom(total);
}

function cal_total(totalprice) {
  return totalprice * 0.1;
}
