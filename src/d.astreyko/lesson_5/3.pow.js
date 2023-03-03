function pow(n, e) {
  let number = 1;
  while (e > 0) {
    number = number * n;
    e--;
  }
/*
  for (let i = 0; i < e; i++) {
    number = number * n;
  }
  */
  return number;
}

console.log(pow(5, 3));
