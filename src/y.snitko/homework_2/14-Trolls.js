function disemvowel(str) {
  return(str.replace(/[aeiou]/gi, ''));
}

console.log(disemvowel('Trolls'));
console.log(disemvowel('hello world'));
