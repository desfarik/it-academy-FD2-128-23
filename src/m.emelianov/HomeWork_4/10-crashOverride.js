function aliasGen(name,lastName){
    let firstLatterName = name[0].toUpperCase();
    let firstLatterLast = lastName[0].toUpperCase();
    const upLetters = 'QWERTYUIOPASDFGHJKLZXCVBNM'
    if (upLetters.includes(firstLatterName) && upLetters.includes(firstLatterLast)){
        return firstName[firstLatterName] + ' ' + surname[firstLatterLast]  
    }else{
        return "Your name must start with a letter from A - Z."
    }
   
}
const firstName = { A: "Alpha", B: "Beta", C: "Cache" };
const surname = { A: "Analogue", B: "Bomb", C: "Catalyst" };
console.log(aliasGen('aru', 'clark'))
console.log(aliasGen('125mike', 'Pencil'))

