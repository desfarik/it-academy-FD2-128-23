Object.defineProperty(Array.prototype, "numberOfOccurrences", {
  value: function numberOfOccurrences(element) {
    let count = 0;
    for (let num of this) {
      if (num === element) {
        count++;
      }
    }
    return count;
  },
});
