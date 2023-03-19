function nicknameGenerator(name){
  if (name.length < 4) {
    return 'Error: Name too short';
  } else {
    "aeiouAEIOU".indexOf(name.charAt(2)) != -1 ? 
    name = name.slice(0,4) : 
    name = name.slice(0,3) ;
    return name;
  }
}

nicknameGenerator('Sam');
nicknameGenerator('Melany');
nicknameGenerator('Snowflake');