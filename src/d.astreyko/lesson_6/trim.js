function trimStart(str) {
  let index = 0;
  while (str[index] === ' ') {
    index++;
  }
  return str.slice(index);
}

console.log(trimStart('   hello'));

function trimEnd(str) {
  let index = str.length - 1;
  while (str[index] === ' ') {
    index--;
  }
  return str.slice(0, index + 1);
}

console.log(trimEnd('   hello'));
console.log(trim('   hello    '));

function trim(str) {
  str = trimStart(str);
  str = trimEnd(str);
  return str;
}
