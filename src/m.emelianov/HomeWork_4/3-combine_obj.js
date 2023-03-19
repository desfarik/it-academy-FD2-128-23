function combine(...obj) {
    let newObject = {};
    for (let i = 0; i < obj.length; i++){
      for(let key in obj[i]){
        if(key in newObject){
          newObject[key] = obj[i][key] + newObject[key]
        }else {
          newObject[key] = obj[i][key]
        }
      }  
    }
    return newObject
    }
  const objA = { a: 10, b: 20, c: 30 }
    const objB = { a: 3, c: 6, d: 3 }
    const objC = { a: 5, d: 11, e: 8 }
    const objD = { c: 3 }
  
  console.log(combine(objA,objB,objC,objD))
  console.log(combine(objA,objB,objC))
  console.log(combine(objA,objB))