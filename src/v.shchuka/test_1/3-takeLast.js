function take(array, n) {
  return array.slice(array.length - n);
}
const array = [2, 3, 4, 3];
console.log(take(array, 3));
