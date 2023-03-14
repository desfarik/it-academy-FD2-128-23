function unique(array) {
  const result = [];
  for (let item of array) {
    if(!result.includes(item)) {
      result.push(item);
    }
  }
  return result
}

console.log(unique([2, 1, 8, 0, 6, 4, 8, 6, 2, 4]));
