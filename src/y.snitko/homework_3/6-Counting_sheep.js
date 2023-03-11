function countSheeps(arrayOfSheep) {
  let arr = [];
  for (let index = 0; index < arrayOfSheep.length; index++) {
    const element = arrayOfSheep[index];
    if (element === true) {
      arr.push(index);
    }
  }
  return arr.length;
}

console.log(
  countSheeps([true, true, true, false, false, true, true, false, true])
);
