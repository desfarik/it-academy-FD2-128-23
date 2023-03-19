function getDeep(object, path){
    let keys = path.split('.')
    let result  = object;
    do{
        result = result[keys.shift()]
    } while (keys.length > 0 && result !== undefined)
    for(let i =0; i < keys.length && result !== undefined; i++){
        result = result[keys[i]]
    }
    return result
}
const user = {
    name: {
        first: 'Ivan',
        last: 'Ivanov',
        letter: {
            abc : 2
        }
    },
    age: 20,
}
console.log(getDeep(user, 'name.letter.abc'))