function getLast(array,n) {
  if (array == null) return false;
  if (n == null) return array[array.length - 1];
  return array.slice(Math.max(array.length - n, 0));
}
console.log(getLast([1, 2, 3, 4, 5],5));
