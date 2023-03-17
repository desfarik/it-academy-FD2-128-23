function mapValues(object,mapFn){
  let newObject = {};
  for (const key in object) {
    const newValue = mapFn(key, object[key]);
    newObject[key] = newValue
  }
  return newObject;
}
let user ={
  name:'ivan',
  age: 20,
}
console.log(mapValues(user,function (key,value){
    if (typeof (value)=== 'number'){
    return value*2
  }
  return value



}))
