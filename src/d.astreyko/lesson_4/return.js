function sum(a, b) {
  const numSum = a + b;
/*  if (numSum <= 0) {
    return 0;
  }*/
  for (let i = 0; i < 10; i++) {
    console.log(i);
    if (i === 5) {
      return numSum; // break;
    }
  }
  return numSum;
}

console.log('ans: '+sum(1, -2));
console.log('ans: '+sum(1, 2));
