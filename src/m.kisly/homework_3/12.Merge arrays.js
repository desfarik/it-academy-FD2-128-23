function mergeArrays(arr1, arr2) {
    const sortArr = [...arr1, ...arr2].sort((a, b) => a - b);
    for (let i = 0; i < sortArr.length; i++) {
        if (sortArr[i] === sortArr[i + 1]) {
            sortArr.splice(i, 1)
        }
    }
    return sortArr
}

console.log(mergeArrays([1, 2, 3, 4], [5, 6, 7, 8]));
console.log(mergeArrays([1, 3, 5, 7, 9], [10, 8, 6, 4, 2]));
console.log(mergeArrays([1, 3, 5, 7, 9, 11, 12], [1, 2, 3, 4, 5, 10, 12]));