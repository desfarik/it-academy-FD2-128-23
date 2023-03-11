function sortMyString(S) {
  let strEven = "";
  let strOdd = "";
  for (let i = 0; i < S.length; i++) {
    if (i % 2 === 0) {
      strEven += S[i];
    } else {
      strOdd += S[i];
    }
  }
  return strEven + " " + strOdd;
}
