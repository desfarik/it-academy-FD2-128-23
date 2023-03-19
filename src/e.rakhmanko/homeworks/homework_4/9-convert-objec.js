function convertHashToArray(hash){
    let result = [];
    Object.keys(hash).sort().map(item => result.push([item,hash[item]]));
    return result;
  }
console.log(convertHashToArray({name: "Jeremy"}))
console.log(convertHashToArray({name: "Jeremy", age: 24, role: "Software Engineer"}))

