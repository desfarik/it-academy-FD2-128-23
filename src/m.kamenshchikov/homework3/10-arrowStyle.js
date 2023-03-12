let ArrowFunc = function (arr) {
  return arr.map((i) => String.fromCharCode(i)).join("");
};
console.log(ArrowFunc([84, 101, 115, 116]));
