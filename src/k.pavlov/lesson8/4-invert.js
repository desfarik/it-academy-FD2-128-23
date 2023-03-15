function invert(object) {
    const inverted = {};
    for (let key in object) {
        inverted[object[key]] = key
    }
    return inverted
}

console.log(invert({
    name: "Ivan",
    age: 20,
    arr: [1,2,3]
}))