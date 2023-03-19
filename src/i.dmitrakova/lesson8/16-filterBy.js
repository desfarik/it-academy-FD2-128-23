function filterBy(object, filterFn){
    let newObject = {}
    for (const key in object) {
      const needCopy = filterFn(key, object[key])
      if(needCopy){
        newObject[key] = object[key]

      }
    }
    return newObject
}
let user = {
    name: 'Sanya',
    age: 25,
}
console.log(filterBy(user), function(key, value){
    if (typeof(value) === 'string'){
        return true
    }else {
        return false;
    }
})