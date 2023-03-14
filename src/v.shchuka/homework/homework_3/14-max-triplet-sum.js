function maxTriSum(numbers) {
  const array = numbers.sort((a, b) => b - a);
  for (let i = 0; i < array.length - 1; i++) {
    if (array[i] === array[i + 1]) {
      array.splice(i, 1);
      i--;
    }
  }
  return array.splice(0, 3).reduce((sum, num) => sum + num, 0);
}
console.log(maxTriSum([2, 1, 8, 0, 6, 4, 8, 6, 2, 4, 8, 6, 6]));
