function mergeArrays(arr1, arr2) {
    let totalArr = [...arr1, ...arr2].sort((x, y) => x - y);
    let set = new Set(totalArr);
    return Array.from(set);
}

console.log(mergeArrays([1, 3, 5, 7, 9, 11, 12], [1, 2, 3, 4, 5, 10, 12]));