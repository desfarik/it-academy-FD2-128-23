function entries(object) {
    const array = [];
    for (const key in object) {
        const entry = [key,object[key]];
        array.push(entry);
    }
    return array
}
console.log(entries({
    name: "Ivan",
    age: 20,
    arr: [1,2,3]
}))
