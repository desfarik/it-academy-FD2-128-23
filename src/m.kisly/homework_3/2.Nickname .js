function nicknameGenerator(name) {    
    if (name.length < 4) {
        return "Error: Name too short"
    }

    if ('aeuio'.includes(name[2])) {
        return name.slice(0, 4)
    } else {
        return name.slice(0, 3)
    }
}

console.log(nicknameGenerator("Jimmy"));    //Jim
console.log(nicknameGenerator("Samantha")); //Sam
console.log(nicknameGenerator("Sam"));      //Error: Name too short
console.log(nicknameGenerator("Kayne"));    //Kay
console.log(nicknameGenerator("Melissa"));  //Mel
console.log(nicknameGenerator("James"));    //am