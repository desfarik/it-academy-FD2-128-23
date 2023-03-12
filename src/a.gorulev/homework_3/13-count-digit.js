function nbDig(n, d) {
  let result = '';
  //квадраты чисел
  for (let i=0; i<=n; i++) {
    result += i * i
  }
  //количество искомых цифр
  return result.split(d).length - 1; 
}

nbDig(25, 1);