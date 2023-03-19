let ArrowFunc = function(arr) {
  return arr.map(item => String.fromCharCode(item)).join(''); 
}

ArrowFunc([70,85,83,32,82,79,72,32,68,65,72]);