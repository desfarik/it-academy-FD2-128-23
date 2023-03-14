function nicknameGenerator(name) {
  if (name.length < 4) return "Error: Name too short";
  if (name[2].match(/[aeuio]/)) return name.slice(0, 4);
  return name.slice(0, 3);
}
