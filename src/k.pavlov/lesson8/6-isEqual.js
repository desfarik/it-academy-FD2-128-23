function isEqual(object1, object2) {
    let keys1 = Object.keys(object1)
    let keys2 = Object.keys(object2)
    if (keys1.length !== keys2.length) {
        return false
    }
    for (let i = 0; i < keys1.length; i++) {
        let key = keys1[i]
        if (object1[key] !== object2[key]) {
            return false
        }
    }
    return true
}

console.log(isEqual({}, {}))
console.log(isEqual({name: "Ivan"}, {}))
console.log(isEqual({name: "Ivan"}, {name: "Ivan"}))
const object1 = {age: 20}
console.log(isEqual(object1, object1))
