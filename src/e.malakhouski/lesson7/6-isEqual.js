function isEqual(arr1, arr2) {
    return arr1.length === arr2.length && arr1.every((value, index) => value === arr2[index]);
            
}

console.log(isEqual([1,2,3,4,5,22,3242,-1,-5], [1,2,3,4,5,22,3242,-1,-5]));