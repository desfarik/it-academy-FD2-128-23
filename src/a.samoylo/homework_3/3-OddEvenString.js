function sortMyString(S) {
    let firstString='';
    let secondString='';
    for (let i=0; i< S.length;i++)
      if (i%2===0){
        firstString += S[i]
      } else {
        secondString += S[i]
      }
    return firstString+' '+secondString;
}