function last(x) {
  let arrStr = x.split(" ");
  let lastSymb = [];
  let lengthArr = arrStr.length;
  while (lengthArr) {
    for (let i = 0; i < lengthArr - 1; i++) {
      const str = arrStr[i];
      lastSymb[i] = str.at(-1);
      lastSymb[i + 1] = arrStr[i + 1].at(-1);
      if (lastSymb[i + 1] < lastSymb[i]) {
        arrStr[i] = arrStr[i + 1];
        arrStr[i + 1] = str;
      }
    }
    lengthArr--;
  }
  return arrStr;
}
console.log(last("man i need a taxi up to ubud"));
