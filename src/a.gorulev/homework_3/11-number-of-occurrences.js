Array.prototype.numberOfOccurrences = function(search) {
  let counter = 0;
  for(let i=0; i < this.length; i++) {
    if(this[i] == search) {
      counter++
    }
  }
  return counter;
}

let arr = [0, 1, 2, 2, 3];
arr.numberOfOccurrences(0);