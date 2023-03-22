function combine() {
    const objA = {a: 10, b: 20, c: 30};
    const objB = {a: 9, c: 6, d: 3, e: 5};
    let result = {};
    for (const key in objA) {
        if (key in result) {
            result[key] = objA[key] + objB[key];
        } else {
            result[key] = objA[key]
        }
    }
    for (const key in objB) {
        if (key in result) {
            result[key] = objA[key] + objB[key];
        } else {
            result[key] = objB[key]
        }
    }
    return result
}

console.log(combine())


