function has(object, key){
   // return key in object;
   return Object.keys(object).includes(key)

}
console.log(has({name2: 'Ivan'}, {}));
