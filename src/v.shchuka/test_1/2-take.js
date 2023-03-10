function take(array, n) {
  let arrNew = [];
  for (let i = 0; i < n; i++) {
    arrNew[i] = array[i];
  }
  return arrNew;
}
const array = [2, 3, 4];
console.log(take(array, 2));
