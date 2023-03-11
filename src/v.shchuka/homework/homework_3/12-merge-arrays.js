function mergeArrays(arr1, arr2) {
  const arrTotal = arr1.concat(arr2).sort((a, b) => a - b);
  for (let i = 0; i < arrTotal.length - 1; i++) {
    if (arrTotal[i] === arrTotal[i + 1]) {
      arrTotal.splice(i, 1);
      i--;
    }
  }
  return arrTotal;
}
console.log(mergeArrays([9, 2, 3, 4, 7, 4, 4], [5, 6, 7, 8, 8]));
