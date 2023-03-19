function combine() {
    let result = {}

    for (let obj of arguments) {
        for (let key in obj) {
            if (key in result) {
                result[key] += obj[key];
            } else {
                result[key] = obj[key];
            }
        }
    }
    return result
}


const objA = { a: 10, b: 20, c: 30 }
const objB = { a: 3, c: 6, d: 3 }
const objC = { a: 5, d: 11, e: 8 }
const objD = { c: 3 }

console.log(combine(objA, objC, objD));