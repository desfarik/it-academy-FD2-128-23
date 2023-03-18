function findMissing(arr1, arr2) {
  arr1.sort((a, b) => a - b);
  arr2.sort((a, b) => a - b);
  for (let i = 0; i < Math.max(arr1.length, arr2.length); i++) {
    if (arr1[i] != arr2[i]) {
      return arr1[i];
    }
  }
}



console.log(findMissing([6, 1, 3, 6, 8, 2], [3, 6, 6, 1, 2]));