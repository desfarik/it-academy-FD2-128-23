function nicknameGenerator(name){
    if (name.length <=3) {
      return "Error: Name too short";
    }
    
    const vowels = "aeiou";
    if (vowels.includes(name[2])) {
      return name.slice(0, 4);
    } else {
      return name.slice(0, 3);
    }
  }

  console.log(nicknameGenerator("Tomson"));


