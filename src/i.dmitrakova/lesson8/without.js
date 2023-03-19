function without(object, keys){
    let result = {}
    for (const key in object) {
        if(!keys.includes(key)){     
            newObject[key] = object[key]
        }
    }
    return result
}
console.log(without({name: "Ivan", age: 20}, []))
console.log(without({name: "Ivan", age: 20}, ["Ivan"]))