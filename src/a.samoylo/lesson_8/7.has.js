function has(object, key) {
    return Object.values[key] !== undefined;
}
console.log(has({'name': 10}, 'hello'))
console.log(has({'name': 10}, 'name'))