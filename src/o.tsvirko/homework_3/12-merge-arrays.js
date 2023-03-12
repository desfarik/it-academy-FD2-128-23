function mergeArrays(arr1, arr2) {
    let combinedArr = [...arr1, ...arr2].sort((a, b) => a - b);
     return [...new Set(combinedArr)];
}
console.log(mergeArrays([1,3,5,7,9], [10,8,1,3,6,4,2]))