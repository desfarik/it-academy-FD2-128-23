function clone(object){
//*    return Object.assign({}, object)*/
//return{...object}
let newObject = {}
for (const key in object) {
    if( typeof object[key] === 'object'){
        newObject[key] = clone(object[key])
    }
    else{
        newObject[key] = object[key]
    }
}
return newObject;
}
let user = {
    name: 'Anna',
    age: 15
}
let cloned = clone(user);
cloned.age = 25;
console.log(cloned, user)