function combine(...arguments) {
    let result = {};

    for (let obj of arguments) {
        for (let key in obj) {
            // if (key in result) {
            //     result[key] += obj[key];
            // } else {
            //     result[key] = obj[key];
            // }
            result[key] = key in result ? result[key] + obj[key] : obj[key];
        }
    }
    return result;
}

console.log(combine({a: 18, b: 20, c: 36, d: 14, e: 8}, {a: 15, b: 20, c: 33, d: 11, e: 8}));