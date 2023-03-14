Array.prototype.numberOfOccurrences = function (elem) {
    let result = 0;
    for (i = 0; i < this.length; i++) {
      if (this[i] == elem) {
        result++;
      }
     } return result
  }
  console.log([0, 1, 2, 2, 3, 2].numberOfOccurrences(2));
  