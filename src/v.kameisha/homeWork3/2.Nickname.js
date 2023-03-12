function nicknameGenerator(name){
    let vowels = 'a,e,o,u,i';
    if (name.length < 4) {
      return 'Error: Name too short';
    } else if (vowels.includes(name[2])) {
      return name.substr(0, 4);
    }
    return name.substr(0, 3);
  }
  console.log(nicknameGenerator("Jimmy"));
  console.log(nicknameGenerator("Samantha"));
  console.log(nicknameGenerator("Kayne"));