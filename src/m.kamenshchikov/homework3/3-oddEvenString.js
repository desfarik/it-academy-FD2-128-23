function sortMyString(S) {
  let evenString = "";
  let oddString = "";
  for (let i = 0; i < S.length; i++) {
    if (i % 2 === 0) {
      evenString += S[i];
    } else {
      oddString += S[i];
    }
  }
  return evenString + " " + oddString;
}
console.log(sortMyString("CodeWars"));
