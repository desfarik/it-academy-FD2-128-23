let arrowFunc = function (arr) {
  return arr.map((num) => String.fromCharCode(num)).join("");
};
console.log(arrowFunc([84, 101, 115, 116]));
