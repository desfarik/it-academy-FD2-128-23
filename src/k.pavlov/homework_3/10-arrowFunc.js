let ArrowFunc = function(arr) {
    return arr.map(arr => String.fromCharCode(arr)).join('');
}

console.log(ArrowFunc([84,101,115,116]));