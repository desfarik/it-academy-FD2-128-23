function combine(...object) {
    let newObject = {}
    for (let i = 0; i < object.length; i++) {
        for (let key in object[i]) {
            if (newObject[key] !== undefined) {
                newObject[key] += object[i][key]
            } else {
                newObject[key] = object[i][key]
            }
        }
    }
    return newObject
}

console.log(combine({ a: 13, b: 20, c: 36, d: 3 }, { a: 15, b: 20, c: 30, d: 11, e: 8 }))
console.log(combine({ a: 18, b: 20, c: 36, d: 14, e: 8 }, { a: 15, b: 20, c: 33, d: 11, e: 8 }))
console.log(combine(({}, {}, {}), {}))