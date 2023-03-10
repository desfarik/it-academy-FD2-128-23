function maxTriSum(numbers) {
  let set = new Set(numbers);
  let array = Array.from(set);
  let arrayOfMax = [];

  for (let i = 0; arrayOfMax.length < 3; i++) {
    let max = array.reduce((a, b) => Math.max(a, b));
    arrayOfMax.push(max);
    array.splice(array.indexOf(max), 1);
  }

  let result = arrayOfMax.reduce((sum, current) => sum + current, 0);
  return result;
}

console.log(maxTriSum([3, 2, 6, 8, 2, 3]));
