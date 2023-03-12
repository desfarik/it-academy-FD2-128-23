let ArrowFunc = function(arr) {
    return arr.map( x => String.fromCharCode(x) ).join('');
   }
console.log(ArrowFunc([72, 69, 76, 76, 79]));