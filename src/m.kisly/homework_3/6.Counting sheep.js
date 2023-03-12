function countSheeps(arrayOfSheep) {
  var counterSheep = 0;
  for (var i = 0; i < arrayOfSheep.length; i++) {
    if (arrayOfSheep[i] === true)
      counterSheep++;
  }
  return counterSheep;
}
console.log(countSheeps([
  true, true, true, false, true, true, true, true,
  true, false, true, false, true, false, false, true,
  true, true, true, true, false, false, true, true,
]));
console.log(countSheeps([
  true, true, true, true, true, true, true, true,
  true, true, true, true, true, true, true, true,
  true, true, true, true, true, true, true, true,
  true, true, true, true, true, true, true, true,
]))
console.log(countSheeps([
  false, false, false, false, false, false, false, false,
  false, false, false, false, false, false, false, false,
  false, false, false, false, false, false, false, false,
  false, false, false, false, false, false, false, false,
]))
