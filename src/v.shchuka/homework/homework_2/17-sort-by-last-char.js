function last(x) {
  let arrStr = x.split(" ");
  let lengthArr = arrStr.length;
  while (lengthArr) {
    for (let i = 0; i < lengthArr - 1; i++) {
      const str = arrStr[i];
      if (arrStr[i + 1].at(-1) < str.at(-1)) {
        arrStr[i] = arrStr[i + 1];
        arrStr[i + 1] = str;
      }
    }
    lengthArr--;
  }
  return arrStr;
}
console.log(last("man i need a taxi up to ubud"));
