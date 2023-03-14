function nicknameGenerator(name) {
  let vowels = 'aeoui';
  if (name.length <= 3) {
    return 'Error: Name too short';
  } else if (vowels.includes(name[2])) {
    return name.slice(0, 4);
  }
  return name.slice(0, 3);
}

console.log(nicknameGenerator('sam'));
console.log(nicknameGenerator('samuel'));
console.log(nicknameGenerator('georgy'));
