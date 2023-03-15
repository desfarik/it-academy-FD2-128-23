function camelCase(str) {
  // let words =getWords(str.toLowerCase());
  // let words = getWords(str);
  let words = getWords(str).map(word => word.toLowerCase());
  for (let i = 0; i < words.length; i++) {
    words[i] = words[i].toLowerCase();
  }

  let result = words[0];
  for (let i = 1; i < words.length; i++) {
    let word = words[i];
    word = word[0].toUpperCase() + word.slice(1);
    result += word;
  }
  return result;
}

function getWords(str) {
  const array = [];
  let temp = '';
  const dividers = ' -_';
  for (let i = 0; i < str.length; i++) {
    let symb = str[i];
    if (dividers.includes(symb)) {
      if (temp) {
        array.push(temp);
        temp = '';
      }
    } else {
      temp += symb;
    }
  }
  if (temp !== '') {
    array.push(temp);
  }
  return array;
}

console.log(camelCase(' user-NAME_Victor'));
