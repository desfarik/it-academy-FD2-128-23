function findMissing(arr1, arr2) {
    let index;
    for (let i = 0; i < arr1.length; i++) {
        index = arr2.indexOf(arr1[i])
        if (index >= 0 ) {
            arr2.splice(index, 1)
        } else {
            return arr1[i]
        }
    }
}

console.log(findMissing([1, 2, 3], [1, 3]))
console.log(findMissing([6, 1, 3, 6, 8, 2], [3, 6, 6, 1, 2]))
