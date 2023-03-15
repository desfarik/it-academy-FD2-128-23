function nicknameGenerator(name){
    let vowels = 'aeiou'
    if (name.length < 4) {
      return 'Error: Name too short'
    }
    if (vowels.indexOf(name[2]) !== -1) {
      return name.slice(0, 4);
    }
    return name.slice(0, 3);

}

console.log(nicknameGenerator('Eveline'));
console.log(nicknameGenerator('Michael'));
console.log(nicknameGenerator('Ian'));