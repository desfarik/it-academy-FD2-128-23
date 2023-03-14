function nicknameGenerator(name){
    let vowels = 'aeuio';
    if (name.length<4) {
      return 'Error: Name too short';
    }
    if (vowels.includes(name[2])) {
      return name.slice(0, 4);
    }
    return name.slice(0,3);
  }
console.log(nicknameGenerator('Mary'))
console.log(nicknameGenerator('Jeannie'))
console.log(nicknameGenerator('Li'))

