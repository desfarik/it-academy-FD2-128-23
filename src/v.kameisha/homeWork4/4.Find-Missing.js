function findMissing(arr1, arr2){
    arr1.sort((a, b) => a - b);
    arr2.sort((a, b) => a - b);
    for(let i = 0; i < arr1.length; i++) {
      if(arr1[i] !== arr2[i]) {
        return arr1[i];
      }
    }
}
console.log(findMissing([1,2,3,4],[5,6,7,8]));