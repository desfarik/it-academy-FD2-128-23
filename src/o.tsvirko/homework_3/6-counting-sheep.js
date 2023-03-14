function countSheeps(arrayOfSheep) {
    let count = 0;
    for (let i = 0; i < arrayOfSheep.length; i++) {
      if (arrayOfSheep[i] === true) {
        count++
      }
    }
    return count
}
console.log(countSheeps([true, false, false, true]))