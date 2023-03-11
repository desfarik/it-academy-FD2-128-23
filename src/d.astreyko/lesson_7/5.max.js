function max(array) {
  let max = array[0];
  for (let i = 1; i < array.length; i++) {
    if (array[i] > max) {
      max = array[i];
    }
  }
  return max;
  // return array.sort((a, b) => a - b).at(-1);
  // return Math.max(...array)

  let arr1 = [1,2,4];
  arr1.push(5);
  arr1 = [...arr1 , 5];
  Math.min(1,2,4)
}

console.log(min([12, 2, 3, 4, 5]));


function arraydes(v1, v2, ...rest) {
  console.log(rest);
}

arraydes(1,2,3,4, 5, 6);
const arr = [1,2,3,4];
arraydes(...arr);
