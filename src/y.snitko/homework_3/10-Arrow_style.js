function ArrowFunc(arr) {
  return arr.map((item) => String.fromCharCode(item)).join('');
}

console.log(ArrowFunc([84, 101, 115, 116]));
