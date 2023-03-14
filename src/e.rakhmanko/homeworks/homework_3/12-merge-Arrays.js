function mergeArrays(arr1, arr2) {
  let arr = arr1.concat(arr2).sort((a, b) => a - b);
  let result = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] !== arr[i + 1]) {
      result.push(arr[i]);
    }
  }
  return result;
}
console.log(mergeArrays([1, 3, 5, 7], [8, 6, 4, 2]))