function mergeArrays(arr1, arr2) {
  let mergeArray = arr1.concat(arr2).sort((a, b) => a - b);
  let set = new Set(mergeArray);
  return Array.from(set);
}

console.log(mergeArrays([1, 3, 5, 7, 9, 11, 12], [1, 2, 3, 4, 5, 10, 12]));
