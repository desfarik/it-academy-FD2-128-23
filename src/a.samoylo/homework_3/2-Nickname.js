function nicknameGenerator(name){
    return name.length > 3 ? name.slice(0,  3 + 'aeiou'.includes(name[2])) : 'Error: Name too short';
}