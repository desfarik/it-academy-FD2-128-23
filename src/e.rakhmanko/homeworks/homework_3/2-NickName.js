function nicknameGenerator(name) {
  let vowels = ["a", "e", "i", "o", "u"];
  if (name.length <= 3) {
    return "Error: Name too short";
  }
  if (vowels.indexOf(name[2]) != -1) {
    return name.slice(0, 4);
  }
  return name.slice(0, 3);
}
console.log(nicknameGenerator("Robert"))
console.log(nicknameGenerator("Jeannie"))
console.log(nicknameGenerator("Sam"))
