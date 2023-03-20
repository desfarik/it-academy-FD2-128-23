function findMissing(arr1, arr2) {
    let newArr1 = arr1.sort((a, b) => b - a);
    let newArr2 = arr2.sort((a, b) => b - a);

    // console.log(newArr1);
    // console.log(newArr2);
    for (let i = 0; i < newArr1.length; i++) {
        if ((newArr1[i] - newArr2[i]) !== 0 && (newArr1[i] - newArr2[i])!== undefined) {
            return newArr1[i];
        }
    }
}
console.log(findMissing([6, 1, 3, 6, 8, 2], [3, 6, 6, 1, 2]));
console.log(findMissing([7], []));
console.log(findMissing([4, 3, 3, 61, 8, 8], [8, 61, 8, 3, 4]));
console.log(findMissing([0, 0, 0, 0, 0], [0, 0, 0, 0]));