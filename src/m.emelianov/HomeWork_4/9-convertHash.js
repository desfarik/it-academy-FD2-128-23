function convertHashToArray(hash){
    let newHash = Object.entries(hash).sort()
    return newHash
  }

  console.log(convertHashToArray({name: "Jeremy"}))
  console.log(convertHashToArray({name: "Jeremy", age: 24}))
  