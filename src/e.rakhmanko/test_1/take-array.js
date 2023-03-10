function takeArrayN(array, n) {
  if (n == null) return array[0];
  if (array == null) return false;
  return array.slice(0, n);
}
console.log(takeArrayN([1, 2, 3, 4], 1));
