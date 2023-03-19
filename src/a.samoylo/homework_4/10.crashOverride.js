function aliasGen(first, second){
    let OveFirst = first[0].toUpperCase( )
    let OveSecond = second[0].toUpperCase( )
  
    if(firstName[OveFirst] && surname[OveSecond]) {
      return firstName[OveFirst] + ' ' + surname[OveSecond]
    } else {
      return 'Your name must start with a letter from A - Z.'
    }
  }