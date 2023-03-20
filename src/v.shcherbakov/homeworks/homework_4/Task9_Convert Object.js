function convertHashToArray(hash) {
    return Object.entries(hash).sort();
    //your code here - sort the keys!
}


console.log(convertHashToArray({name: 'Jeremy', age: 24, role: 'Software Engineer'}));
