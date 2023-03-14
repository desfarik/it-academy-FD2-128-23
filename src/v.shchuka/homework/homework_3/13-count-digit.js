function nbDig(n, d) {
  let arr = [];
  for (let i = 0; i <= n; i++) {
    arr.push(i ** 2);
  }
  const arrayStr = arr.join("").split("");
  return arrayStr.filter((symb) => symb === `${d}`).length;
}
console.log(nbDig(10, 1));
