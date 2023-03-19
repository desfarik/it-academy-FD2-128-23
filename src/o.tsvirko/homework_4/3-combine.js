function combine(...args) {
    let newObj = {};
        for (let arg of args) {
          for (let [key, value] of Object.entries(arg)) {
        if (!newObj.hasOwnProperty(key)) {
          newObj[key] = value;
        } else if (newObj.hasOwnProperty(key)) {
          newObj[key] += value;
        }
      }
    }
        return newObj;
}
console.log(combine({ a: 10, b: 20, c: 30 }, { a: 3, c: 6, d: 3 }, { a: 5, d: 11, e: 8 }, { c: 3 }))