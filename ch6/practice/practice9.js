// a[15] = 2
function arraySet(arr, idx, value) {
  const copy = arr.slice();
  copy[idx] = value;
  return copy;
}
