function disemvowel(str) {
  let newStr = "",
    i;

  for (i = 0; i < str.length; i++) {
    if ("aeiou".includes(str[i].toLowerCase())) continue;
    newStr += str[i];
  }
  return newStr;
}
console.log(disemvowel("Trolls"));
