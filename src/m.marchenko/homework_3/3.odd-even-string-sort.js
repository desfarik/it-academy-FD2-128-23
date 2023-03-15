function sortMyString(S) {
    let even = ''
    let odd = ''
    for (let i = 0; i < S.length; i++) {
      if (i%2 === 0) {
        even += S[i]
      } else {
        odd += S[i]
      }
    } 
    return even + ' ' + odd;
}

console.log(sortMyString('my homework'));
console.log(sortMyString('1234567890'));