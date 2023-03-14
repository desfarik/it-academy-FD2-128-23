function nicknameGenerator(name) {
  const vowels = "aeiou";
  if (name.length <= 3) {
    return "Error: Name too short";
  }
  return vowels.includes(name[2]) ? name.slice(0, 4) : name.slice(0, 3);
}
console.log(nicknameGenerator("Saemara"));
