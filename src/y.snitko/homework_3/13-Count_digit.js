function nbDig(n, d) {
  let arr = [];
  let result = [];
  for (let index = 0; index <= n; index++) {
    arr.push(index ** 2);
  }
  result = arr
    .join('')
    .split('')
    .filter((items) => items == d);
  return result.length;
}

console.log(nbDig(10, 1));
console.log(nbDig(5750, 0));
