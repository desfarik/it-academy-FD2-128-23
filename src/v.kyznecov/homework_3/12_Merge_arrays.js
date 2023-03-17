function mergeArrays(arr1, arr2) {
    let generalArray = arr1.concat(arr2).sort((a, b) => a - b);
    let result = [];
    for (let i = 0; i < generalArray.length; i += 1) {
      if(generalArray[i] !== generalArray[i + 1]) {
        result.push(generalArray[i]);
      }
    } return result
  }
  console.log(mergeArrays([1, 3, 5, 7, 9], [10, 8, 6, 4, 2]))
  console.log(mergeArrays([1, 3, 5, 7, 9, 11, 12], [1, 2, 3, 4, 5, 10, 12]))
  