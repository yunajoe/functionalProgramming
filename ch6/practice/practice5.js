// a[15] = 2
function arraySet(array, idx, value) {
  const copy = array.slice();
  copy[idx] = value;
  return copy;
}
