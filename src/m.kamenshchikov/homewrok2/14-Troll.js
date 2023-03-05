function disemvowel(str) {
  return str.replace(/[aeiou]/gi, "");
}
console.log(
  disemvowel("Hello World")
);