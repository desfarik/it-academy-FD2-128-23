function findMissing(arr1, arr2) {
    let arr1Sort = arr1.sort()
    let arr2Sort = arr2.sort()
    for (let i = 0; i < arr1Sort.length; i++) {
        if (arr1Sort[i] != arr2Sort[i])
            return arr1Sort[i]
    }
}

console.log(findMissing([1, 2, 3], [1, 3]), 2);
console.log(findMissing([6, 1, 3, 6, 8, 2], [3, 6, 6, 1, 2]), 8);
console.log(findMissing([7], []), 7);
console.log(findMissing([4, 3, 3, 61, 8, 8], [8, 61, 8, 3, 4]), 3);
console.log(findMissing([0, 0, 0, 0, 0], [0, 0, 0, 0]), 0);