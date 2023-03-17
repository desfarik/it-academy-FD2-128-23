function map(object,mapFn){
let newObject = {};
  for (const key in object) {
    const entry = mapFn(key, object[key]);
    Object.assign(newObject,entry)
  }
  return newObject;
}
 let user ={
  name:'ivan',
   age: 20,
 }
 console.log(map(user,function (key,value){
   const newKey = key + '_' + typeof(value);
   return {
     [newKey]: value
   }
 }))
