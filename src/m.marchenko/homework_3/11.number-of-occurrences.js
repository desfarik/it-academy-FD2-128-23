Object.defineProperty(Array.prototype, 'numberOfOccurrences',{ 
    value : function numberOfOccurrences(element) {
      let count = 0
      for (let num of this) {
        if (element === num) {
          count++
        }
      }
      return count
    }
  });

  console.log([0, 1, 2, 2, 3].numberOfOccurrences(2))
  console.log([0, 1, 2, 2, 3].numberOfOccurrences(8))