function findMissing(arr1, arr2) {
    let newArr1 = arr1.sort((a, b) => a - b);
    let newArr2 = arr2.sort((a, b) => a - b);

    if (newArr1.length < newArr2.length) {
        return finder(newArr2, newArr1)
    }
    return finder(newArr1, newArr2)
}

function finder(array1, array2) {
    for (let i = 0; i < array1.length; i++) {
        if (array1[i] !== array2[i]) {
            return array1[i]
        }
    }
}

console.log(findMissing([6, 1, 3, 6, 8, 2], [3, 6, 6, 1, 2]));
console.log(findMissing([7], []));
console.log(findMissing([4, 4, 3], [5, 3, 4, 4]));
