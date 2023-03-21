function findMissing(arr1, arr2) {
  let sumValues1 = 0;
  let sumValues2 = 0;
  for (let index = 0; index < arr1.length; index++) {
    sumValues1 += arr1[index];
  }
  for (let index = 0; index < arr2.length; index++) {
    sumValues2 += arr2[index];
  }
  return sumValues1 - sumValues2;
}

console.log(findMissing([1, 2, 3], [1, 3]));
console.log(findMissing([6, 1, 3, 6, 8, 2], [3, 6, 6, 1, 2]));
console.log(findMissing([7], []));
console.log(findMissing([4, 3, 3, 61, 8, 8], [8, 61, 8, 3, 4]));
