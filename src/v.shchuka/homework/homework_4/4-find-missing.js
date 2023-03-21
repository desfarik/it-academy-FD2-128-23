function findMissing(arr1, arr2) {
  return (
    arr1.reduce((sum, num) => sum + num, 0) -
    arr2.reduce((sum, num) => sum + num, 0)
  );
}
console.log(findMissing([1, 2, 2, 3], [1, 2, 3]));
