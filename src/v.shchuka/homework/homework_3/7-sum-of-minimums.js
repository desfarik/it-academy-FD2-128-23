function sumOfMinimums(arr) {
  let sum = 0;
  const arrMin = arr.map((innerArr) => Math.min(...innerArr));
  return arrMin.reduce((sum, num) => sum + num);
}
const arr = [
  [7, 9, 8, 6, 2, 1],
  [6, 3, 5, 4, 3],
  [5, 8, 7, 4, 5],
];
console.log(sumOfMinimums(arr));
