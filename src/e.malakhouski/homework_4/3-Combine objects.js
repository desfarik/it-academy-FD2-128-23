function combine(...args) {
  let result = args.reduce((sum, object) => {
    for (let key in object) {
      let value = object[key];
      if (sum[key] === undefined) {
        sum[key] = value;
      } else {
        sum[key] += value;
      }
    }
    return sum;
  }, {});
  return result;
}



console.log(combine({ a: 10, b: 20, c: 30 }, { a: 3, c: 6, d: 3 }, { a: 5, d: 11, e: 8 }));