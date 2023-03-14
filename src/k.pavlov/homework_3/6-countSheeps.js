function countSheeps(arrayOfSheep) {
    let sheeps = 0;
    for (let i = 0; i < arrayOfSheep.length; i++) {
        if (arrayOfSheep[i] === true) {
            sheeps++
        }
    }
    return sheeps
}

console.log(countSheeps([
    true, false, true, true, true, true, true, false,
    true, true, true, false, false, true, true, true,
    true, true, true, true, false, true, true, true,
]));