function nbDig(n, d) {
  let counter = "";
  for (let i = 0; i <= n; i++) {
    counter += Math.pow(i, 2);
  }
  return counter.split(d).length - 1;
}
console.log(nbDig(10, 1));
