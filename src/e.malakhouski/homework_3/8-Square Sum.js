function squareSum(numbers) {
  let sumSquares = numbers.reduce((sum, current) => sum + current ** 2, 0);
  return sumSquares;
}

console.log(squareSum([0, 3, 4, 5]));
