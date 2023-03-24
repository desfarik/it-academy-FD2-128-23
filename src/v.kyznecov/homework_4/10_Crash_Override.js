function aliasGen(str1, str2 ){
if (str1[0].match(/[A-Z]/gi) && str2[0].match(/[A-Z]/gi)) {
return name[str1[0].toUpperCase()] + ' ' + surname[str2[0].toUpperCase()]
} else {
return 'Your name must start with a letter from A - Z.'
}
}
let name = { A: "Alpha", B: "Beta", C: "Cache" };
let surname = { A: "Analogue", B: "Bomb", C: "Catalyst" };

console.log(aliasGen('Alik', 'Brentwood'));
console.log(aliasGen('Alik', '12Brentwood'));