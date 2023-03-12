function countSheeps(arrayOfSheep) {
  let counter = 0;
  for (i = 0; i < arrayOfSheep.length; i++) {
    if (arrayOfSheep[i] === true) {
      counter++;
    }
  }
  return counter;
}
console.log(countSheeps([true, false, true, null, true, undefined]));
