function nicknameGenerator(name) {
    if (name.length < 4) {
        return ("Error: Name too short");
    } else if (name[2] === 'a' || name[2] === 'e' || name[2] === 'i' || name[2] === 'o' || name[2] === 'u') {
        return name.substring(0, 4);
    } else {
        return name.substring(0, 3);
    }
}

console.log(nicknameGenerator('Jimmy'));
console.log(nicknameGenerator('Gregory'));
console.log(nicknameGenerator('ya'));







