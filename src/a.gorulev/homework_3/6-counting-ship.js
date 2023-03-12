function countSheeps(arrayOfSheep) {
  let target = true;
  let counter = 0;
  for (let i = 0; i < arrayOfSheep.length; i++) {
  if (arrayOfSheep[i] == target) {
        counter++;
    }
  }
  return counter;
}

countSheeps(
  [true,  true,  true,  false,
  true,  true,  true,  true ,
  true,  false, true,  false,
  true,  false, false, true ,
  true,  true,  true,  true ,
  false, false, true,  true]);