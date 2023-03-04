function disemvowel(str) {
  let vowels = "aeiou";
  let array = str.split("");
  for (let i = 0; i < array.length; i++) {
    if (vowels.includes(array[i].toLowerCase())) {
      delete array[i];
    }
  }
  let withoutVowels = array.join("");
  return withoutVowels;
}

console.log(disemvowel("This website is for losers LOL!"));
