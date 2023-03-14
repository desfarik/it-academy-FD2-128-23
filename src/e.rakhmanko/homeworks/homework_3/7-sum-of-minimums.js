function sumOfMinimums(arr) {
  let result = 0;

  for (let i = 0; i < arr.length; i++) {
    result += Math.min(...arr[i]);
  }

  return result;
}
console.log(
  sumOfMinimums([
    [1, 2, 3, 4, 5],
    [5, 6, 7, 8, 9],
    [20, 21, 34, 56, 100],
  ])
);
