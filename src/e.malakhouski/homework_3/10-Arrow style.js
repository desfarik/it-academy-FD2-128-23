let ArrowFunc = function (arr) {
    return arr.map(symb => String.fromCharCode(symb)).join(''); 
}

console.log(ArrowFunc([70,85,83,32,82,79,72,32,68,65,72]));