function minSum(arr) {
  let sum = 0;
  const arrSort = arr.sort((a, b) => a - b);
  for (let i = 0; i < arrSort.length / 2; i++) {
    const lastIndex = arrSort.length - 1 - i;
    sum += arrSort[i] * arrSort[lastIndex];
  }
  return sum;
}
console.log(minSum([12, 6, 10, 26, 3, 24]));
