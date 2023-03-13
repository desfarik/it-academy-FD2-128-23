function sortMyString(S) {
    let even= '';
    let oddNumbers='';
    for (let i = 0; i < S.length; i++) {
    if (i % 2 === 0) {
      even += S[i] }
    else {
      oddNumbers += S[i] }
  }
    return even + " " + oddNumbers;
}
console.log( sortMyString('CodeWars'))
