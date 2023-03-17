function convertHashToArray(hash){
    // let result = [];
    // for (let key in hash) {
    //     result.push([key, hash[key]])
    // }
    // return result.sort()
   return Object.entries(hash).sort()
}

console.log(convertHashToArray({
    name: 'Jeremy',
    age: 24,
    role: 'Software Engineer'}));