function nicknameGenerator(name) {
  const consonants = "qwrtypsdfghjklzxcvbnm";
  if (name.length <= 3) {
    return "Error: Name too short";
  }
  if (consonants.includes(name[2])) {
    return name.slice(0, 3);
  } else {
    return name.slice(0, 4);
  }
}
console.log(nicknameGenerator("Thomas"));
