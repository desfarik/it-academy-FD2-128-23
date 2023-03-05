function consonantCount(str) {
  const consonants = "xcvbnmqwrtpsdfghjklzy";
  let sum = 0;
  for (const symbol of str.toLowerCase()) {
    if (consonants.includes(symbol)) {
      sum += 1;
    }
  }
  return sum;
}
console.log(consonantCount("Hello world"));
