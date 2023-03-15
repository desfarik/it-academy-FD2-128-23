function squareSum(numbers) {
  return numbers.reduce((sum, current) => sum + current ** 2, 0);
}
console.log(squareSum([2, 2]));
