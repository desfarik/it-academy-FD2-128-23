function split(str, separator) {
  const array = [];
  let temp = '';
  for (let i = 0; i < str.length; i++) {
    let symb = str[i];
    if (symb === separator) {
      if (temp) {
        array.push(temp);
        temp = '';
      }
    } else {
      temp += symb;
    }
  }
  if (temp) {
    array.push(temp);
  }
  return array;
}

console.log(split('21 21 343423 34234', ' '));
