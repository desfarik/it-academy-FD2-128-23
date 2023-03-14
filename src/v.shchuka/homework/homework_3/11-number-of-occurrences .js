Object.defineProperty(Array.prototype, "numberOfOccurrences", {
  value: function numberOfOccurrences(element) {
    return this.filter((num) => num === element).length;
  },
});
console.log([0, 1, 2, 2, 3].numberOfOccurrences(2));
