function findMissing(arr1, arr2) {
    arr1.sort();
    arr2.sort();
    for (let i in arr1) {
      if (arr1[i] !== arr2[i]) {
        return arr1[i];
      }
    }
}
console.log(findMissing([1, 2, 3], [1, 3]))