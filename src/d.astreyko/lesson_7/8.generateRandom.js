function generateRandom(size, from, to) {
  let array = [];
  for (let i =0; i<size;i++) {
    array.push(randomNumber(from, to))
  }
  return array;
}

function randomNumber(from, to) {
  return  Math.floor(Math.random()*(to-from)+from);
}

// console.log(randomNumber(6,12))
console.log(generateRandom(10,16,32))

