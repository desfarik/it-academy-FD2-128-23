function max(a, b, c) {
  function max2(a, b) {
    return a > b ? a : b;
  }
  return max2(max2(a,b),c)
}
console.log(max(5, 8, 10));
