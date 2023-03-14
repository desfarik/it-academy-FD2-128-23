function chunk(array, size) {
    newArray = [];
   for(let i = 0; i<array.length; i++) {
    newArray.push(array.splice(0,size));
   }
   if (array.length !==0) {
    newArray.push(array)
   }
   return newArray;
}

console.log(chunk([1,2,3,4,5,22,3242,-1,-5], 4));