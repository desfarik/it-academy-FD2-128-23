Array.prototype.numberOfOccurrences = function (element) {
  let counter = 0;
  for (i = 0; i < this.length; i++) {
    if (this[i] == element) {
      counter++;
    }
  }

  return counter;
};
console.log([0, 1, 2, 2, 3].numberOfOccurrences(2));
