function sortMyString(S) {
  let groupOne = '';
  let groupTwo = '';
  for (let index = 0; index < S.length; index++) {
    if (index % 2 === 0) {
      groupOne += S[index];
    } else {
      groupTwo += S[index];
    }
  }
  return groupOne + ' ' + groupTwo;
}

console.log(sortMyString('helloWorld'));
console.log(sortMyString("YCOLUE'VREER"));
