function combine(){
  let newArray = [...arguments];
  let combObj = {};
  for(let i = 0; i < arguments.length; i++){
    for(let key in arguments[i]){
      if(!combObj[key]){
      combObj[key] = arguments[i][key];
      }
      else {
        combObj[key] += arguments[i][key];
      }
    }
  }
return combObj;
}

const objA = { a: 10, b: 20, c: 30 }
const objB = { a: 3, c: 6, d: 3 }

combine(objA, objB)