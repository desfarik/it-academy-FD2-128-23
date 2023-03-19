function convertHashToArray(hash){
    let array = [];
    for (let key in hash) {
     array.push([key, hash[key]]);
  }
    return array.sort();
}

console.log(convertHashToArray({name: 'Jeremy', age: 24, role: 'Software Engineer'}))