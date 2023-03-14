Object.defineProperty(Array.prototype, 'numberOfOccurrences',{ 
    value : function numberOfOccurrences(element) {
        let count = 0;
      for (let num of this){
        if (num === element)
          count++;
      }return count
    }
  }); // не понял логики



function numberOf(array, item){
    let value = 0;
    for(let i = 0; i< array.length; i++){
        if(array[i] === item){
            value++;
            
        }
    }
    return `number of ${item} in array: ${value}`
}

  console.log(numberOf([3, 1, 3, 2, 3, 6, 9], 3));
  console.log(numberOf([0, 6, 8, 9, 4, 6, 9], 6));
  console.log(numberOf([0, 1, 0, 2, 5, 6, 4], 7));