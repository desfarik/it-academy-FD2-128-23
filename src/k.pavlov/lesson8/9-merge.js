function merge(object1, object2) {
    // return {
    //     ...object1,
    //     ...object2,
    // }

    //return Object.assign({}, object1, object2);

    let result = {}
    for (const key in object1) {
        result[key] = object1[key]
    }
    for (const key in object2) {
        result[key] = object2[key]
    }
    return result
}

console.log(merge({a: 'a'}, {b: 'b'}))