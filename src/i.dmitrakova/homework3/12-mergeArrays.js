function mergeArrays(array1, array2) {
    const newArray = array1.concat(array2).sort((a, b) => a - b);
    return [...new Set(newArray)];
  }
  console.log(mergeArrays([8, 2, 3, 4, 7, 5], [1, 7, 6, 16, 15]));