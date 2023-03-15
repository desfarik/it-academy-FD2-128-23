function at(str, index) {
  if (index>=0) {
    return str[index];
  }
  let correctedIndex = str.length+index;
  return str[correctedIndex];
}
console.log(at('name', 2))
console.log(at('name', -2))
console.log(at('name', -3))
