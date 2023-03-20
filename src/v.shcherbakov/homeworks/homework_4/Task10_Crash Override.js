function aliasGen(name, lastName) {
    const letters = "ABCDEFGHLJKLMNOPQRSTUVWXYZ";
    let letterName = name[0].toUpperCase();
    let letterLastName = lastName[0].toUpperCase();
    if ((letters.includes(letterName) && letters.includes(letterLastName))) {
        return `${firstName[letterName]} ${secondName[letterLastName]}`
    } else {
        return "Your name must start with a letter from A - Z.";
    }

}

let firstName = {A: "Alpha", B: "Beta", C: "Cache"};
let secondName = {A: "Analogue", B: "Bomb", C: "Catalyst"};
console.log(aliasGen("Boris", "Anumbha"));