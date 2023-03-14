 function values(object){
  const array = [];
   for (const key in object) {
     let value = object[key];
     array.push(value)
   }
   return array;
 }

 const user = {
   name: "Ivan",
   age: 20,
   arr : [1,2,3]
 }
 console.log(values(user));
 console.log(Object.values(user));
