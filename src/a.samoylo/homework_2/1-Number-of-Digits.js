function digits(n) {
  return `${n}`.length;
};

console.log(digits(5) === 1);
console.log(digits(12345) === 5);
console.log(digits(9876543210) === 10);