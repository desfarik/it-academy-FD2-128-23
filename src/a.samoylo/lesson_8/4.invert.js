function invert(object){
    var swap = {};
    for(var key in object){
      swap[object[key]] = key;
    }
    return swap;
}

console.log(invert({'first': 'fir', 'hello': 'hel'}))
console.log(Object.keys({'first': 'fir', 'hello': 'hel'}).length)