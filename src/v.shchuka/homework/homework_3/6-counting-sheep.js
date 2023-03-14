function countSheeps(arrayOfSheep) {
  let sum = 0;
  for (let sheep of arrayOfSheep) {
    if (sheep) {
      sum++;
    }
  }
  return sum;
}
const array = [
  true,
  true,
  true,
  false,
  true,
  true,
  true,
  true,
  true,
  false,
  true,
  false,
  true,
  false,
  false,
  true,
  true,
  true,
  true,
  true,
  false,
  false,
  true,
  true,
];
console.log(countSheeps(array));
