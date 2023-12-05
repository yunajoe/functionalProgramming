// 문제 o["price"] = 37
function objectSet(object, key, value) {
  const copy = Object.assign({}, object);
  copy[key] = value;
  return copy;
}

// 문제 setPrice를 refactoring하기
function setPrice(item, new_price) {
  const item_copy = Object.assign({}, item);
  item_copy.price = new_price;
  return item_copy;
}
function setPriceRefactoring(object, new_price) {
  return objectSet(object, "price_key", new_price);
}
