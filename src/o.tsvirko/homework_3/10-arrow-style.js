var ArrowFunc = function(arr) {
    return arr.map(a => String.fromCharCode(a)).join('');
}
console.log(ArrowFunc([84,101,115,116]))