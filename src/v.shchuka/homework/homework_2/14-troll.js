function disemvowel(str) {
  const vowels = "aeiou";
  let result = "";
  for (const symbol of str) {
    if (vowels.includes(symbol.toLowerCase())) {
      continue;
    } else {
      result += symbol;
    }
  }
  return result;
}
console.log(
  disemvowel("ths wbst s fr lsrs ll!' to equal 'Ths wbst s fr lsrs LL!")
);
