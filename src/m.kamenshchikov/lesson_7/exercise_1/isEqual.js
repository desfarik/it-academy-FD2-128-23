let first = [1, 2, 3, 4, 5];
let second = [1, 2, 3, 3, 4];

let isEqual =
  first.length === second.length &&
  first.every((value, index) => value === second[index]);

console.log(isEqual);
