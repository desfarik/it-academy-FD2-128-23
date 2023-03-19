function isEqual(object1, object2){
    const keys1 = Object.keys(object1)
    const keys2 = Object.keys(object2)
    if (keys1.length != keys2.length){
        return false
    }
    for(let i=0; i < keys1.length; i++){
        let key = keys1[i];
        if(object1[key] != object2[key]){
            return false;
        }
    }
    return//
}

console.log(isEqual({}, {}));
console.log(isEqual({name2: 'Ivan'}, {}));
console.log(isEqual({name2: 'Ivan'}, {name2: 'Ivan'}));
const obj ={
    name3: 'kola'
}
console.log(isEqual(obj, obj));