function pick(object, keys) {

    return keys.map(function (key) {
        return object[key]
})
    
//     for (const key of keys) {
//         let value = object[key];
//         array.push(value);
//     }
     return array
 }

const user = {
    name: 'Ivan Ivanov',
    first: 'Ivan',
    last: 'Ivanov',
    age: 10,
}

console.log(pick(user, ['first', 'last']))