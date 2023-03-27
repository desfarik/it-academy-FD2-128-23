function combine(...restruction) {
  const result = {};
  
  while (restruction.length) {
    let object = restruction.pop();
    for (let key in object) {
      if (result[key]) {
        result[key] += object[key]
      } else {
        result[key] = object[key]
      }
    }
  }
  
  return result;
}
console.log(combine({ a: 18, b: 20, c: 36, d: 14, e: 8 },{ a: 15, b: 20, c: 33, d: 11 }));
