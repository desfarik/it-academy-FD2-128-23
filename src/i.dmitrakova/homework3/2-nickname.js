function nicknameGenerator(nickname) {    
    if (nickname.length < 4) {
        return "Error: Name too short"
    }
    vowels ='aeuio';
    if (vowels.includes(nickname[2])) {
        return nickname.slice(0, 4)
    } else {
        return nickname.slice(0, 3)
    }

}

console.log(nicknameGenerator("Ira"));    
console.log(nicknameGenerator("Dima"));      