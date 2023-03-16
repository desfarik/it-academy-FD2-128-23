function mergeArrays(arr1, arr2) {
  let result = arr1.concat(arr2);

  function delRepeat(result) {
    let tempArr = [];
    for (let index = 0; index < result.length; index++) {
      if (!tempArr.includes(result[index])) {
        tempArr.push(result[index]);
      }
    }
    return tempArr;
  }
  return delRepeat(result).sort((x, y) => x - y);
}

console.log(mergeArrays([1, 3, 5, 7, 9], [10, 3, 6, 4, 2]));
console.log(mergeArrays([1, 3, 5, 7, 9, 12, 3, 4], [10, 3, 6, 4, 2]));
