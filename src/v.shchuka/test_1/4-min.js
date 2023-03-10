function min(array) {
  let minNum = array[0];
  for (let i = 0; i < array.length; i++) {
    if (array[i] < minNum) {
      minNum = array[i];
    }
  }
  return minNum;
}
const array = [2, 3, 4, 3];
console.log(min(array));
