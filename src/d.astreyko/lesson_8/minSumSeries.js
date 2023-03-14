const array = [1, 2, 5, 2, 6, 9, 2, 3];

const minSumSeries = function (array) {
  const sortedArray = array.sort((a, b) => a - b);
  console.log('sorted', sortedArray);
  let sum = 0;

  /*  while (sortedArray.length > 0) {
      const first = sortedArray.shift();
      const last = sortedArray.pop();
      sum += first * last;
    }*/

  for (let i = 0; i < sortedArray.length / 2; i++) {
    sum += sortedArray[i] * sortedArray.at(-i - 1);
  }

  return sum;
};
