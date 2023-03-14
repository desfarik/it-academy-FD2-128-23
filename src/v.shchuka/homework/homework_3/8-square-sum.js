function squareSum(numbers) {
  return numbers.reduce((sum, num) => sum + num ** 2, 0);
}
console.log(squareSum([0, 3, 4, 5]));
