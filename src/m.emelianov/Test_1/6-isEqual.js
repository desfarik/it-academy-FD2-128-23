function isEqual(arr1, arr2){
    return arr1.length === arr2.length && arr1.every((value, index) => value === arr2[index]);

}
console.log(isEqual([11,22,33], [11,22,33]))
console.log(isEqual([11,22,33], [11,2,33]))