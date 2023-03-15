function keys(object) {
    const array = [];
    for (const key in object) {
        array.push(key);
    }
    return array
}
console.log(keys({
    name: "Ivan",
    age: 20,
    arr: [1,2,3]
}))