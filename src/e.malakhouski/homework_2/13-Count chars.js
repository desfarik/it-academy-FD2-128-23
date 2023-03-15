function consonantCount(str) {
  let consonants = "bcdfghjklmmnpqrstvwxzy";
  str = str.toLowerCase();
  let count = 0;
  let array = str.split("");
  for (let i = 0; i < array.length; i++) {
    if (consonants.includes(array[i])) {
      count++;
    }
  }
  return count;
}

console.log(consonantCount("bcdfghjklmnpqrstvwxyz"));
