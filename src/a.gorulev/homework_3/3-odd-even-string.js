function sortMyString(S) {
  let left = '';
  let right = '';
  // четные и 0 влево, нечетные вправо
  for(let i = 0; i < S.length; i++) {
    i % 2 == 0 || i == 0 ? left += S[i] :
    right += S[i];
  }
  return left + ' ' + right;
}

sortMyString('sdafjgjdk');