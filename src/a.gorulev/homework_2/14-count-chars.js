function consonantCount(str) {
  let consonants = 0;
  for(let i = 0, j = str.length; i < j; i++) {
    if ('bcdfghjklmnpqrstvwxyzBCDFGHJKLMNPQRSTVWXYZ'
       .indexOf(str[i]) !== -1) consonants++;
  }
  return consonants;
}