function dataReverse(data) {
  let result = [];
  for (let index = 0; index < data.length; index += 8) {
    let element = data.slice(index, index + 8);
    result.push(element);
  }
  return result.reverse().flat();
}

console.log(
  dataReverse([
    1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1,
    0, 1, 0, 1, 0, 1, 0,
  ])
);
