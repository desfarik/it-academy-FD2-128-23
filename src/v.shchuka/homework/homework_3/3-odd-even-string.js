function sortMyString(str) {
  let strEvenSymb = "";
  let strOddSymb = "";
  for (let i = 0; i < str.length; i++) {
    const symb = str[i];
    if (i % 2 === 0) {
      strEvenSymb += symb;
    } else {
      strOddSymb += symb;
    }
  }
  return `${strEvenSymb} ${strOddSymb}`;
}
console.log(sortMyString("CodeWars"));
