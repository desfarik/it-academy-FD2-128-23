function nbDig(n, d) {
    count = '';
    for (let i = 0; i <= n; i++) {
      count += Math.pow(i, 2);
    }
    return count.split(d).length - 1;
}
console.log(nbDig(11011, 2))