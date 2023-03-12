Object.defineProperty(Array.prototype, 'numberOfOccurrences',{ 
    value : function numberOfOccurrences(element) {
      let total = 0;
      for (let number of this) {
        if (number === element) {
          total++;
        }
      }
      return total;
    }
  });