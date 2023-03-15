function nicknameGenerator(name){
    const vowels = 'aeoui';
    
      if (name.length < 4){
          return 'Error: Name too short'
      }else if (vowels.includes(name.at(2))){
          return name.slice(0, 4)
      }else{
          return name.slice(0, 3)
      }
  }
  
  console.log(nicknameGenerator('Alfred'))
  console.log(nicknameGenerator('Gronder'))
  console.log(nicknameGenerator('Ni'))