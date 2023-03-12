function sumOfMinimums(arr) {
  let sum = 0;
  for (i = 0; i < arr.length; i++) {
    sum = sum + Math.min(...arr[i]);
  }
  return sum;
}
console.log(
  sumOfMinimums([
    [5, 12, 1, 14],
    [26, 38, 19, 6],
    [71, 3, 43, 11],
    [1, 0, 2, 8],
  ])
);
