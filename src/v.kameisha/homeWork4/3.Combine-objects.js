function combine(...objS) { 
    let newObj = {}
  for(let obj of objS){
    for(let key in obj){
    if(newObj[key]){
      newObj[key]+=obj[key]
    }else {
        newObj[key] = obj[key]
    }
  }
  }
   return newObj
  }
const objA = { a: 10, b: 20, c: 30 };
const objB = { a: 3, b: 6, c: 3 };
  console.log(combine(objA,objB));