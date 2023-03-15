Object.defineProperty(Array.prototype, 'numberOfOccurrences',{ 
    value : function numberOfOccurrences(element) {
      let number = 0
      for (let i=0; i < this.length; i++) {
        if (this[i] === element) {
          number++
      }
    }
    return number
    }
});
