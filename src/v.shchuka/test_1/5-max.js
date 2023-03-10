function max(array) {
  let maxNum = array[0];
  for (let i = 0; i < array.length; i++) {
    if (array[i] > maxNum) {
      maxNum = array[i];
    }
  }
  return maxNum;
}
const array = [2, 3, 4, 3];
console.log(max(array));
