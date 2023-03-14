function sortMyString(S) {
    let start = '';
    let end = '';
      for (let i = 0; i < S.length; i++) {
        if (i % 2 === 0) {
          start += S[i];
        } else {
         end += S[i]; 
        }
      }
      return start + ' ' + end;
}
console.log(sortMyString('string'))