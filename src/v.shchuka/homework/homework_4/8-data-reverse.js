function dataReverse(data) {
  let dataCopy = data.slice();
  let arr = [];
  for (let i = 0; i < data.length / 8; i++) {
    arr.push(dataCopy.splice(0, 8));
  }
  return arr.reverse().flat();
}
console.log(
  dataReverse([
    1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1,
    0, 1, 0, 1, 0, 1, 0,
  ])
);
