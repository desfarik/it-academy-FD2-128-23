function map(object, mapFn){
let newObject = {};
for (const key in object) {
    const entry = mapFn(key, object[key])
    Object.assign(newObject, entry)
}
return newObject
}
let user = {
    name: 'Sanya',
    age: 25,
}
console.log(map(user, function(key, value){
    const newKey = key + '_' + typeof(value);
    return{
        [newKey]: value,
    }
}))

/*mapFn - функция*/
/*let array = [1,2,3];
let arrayX2 = array.map(function (value) {
    return value*2;
})
console.log(arrayX2)*/