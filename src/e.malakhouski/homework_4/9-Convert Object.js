function convertHashToArray(hash) {
    return Object.entries(hash).sort();
}


console.log(convertHashToArray({name: "Jeremy", age: 24, role: "Software Engineer"}));