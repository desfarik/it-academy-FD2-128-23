let firstName = { A: "Alpha", B: "Beta", C: "Cache" };
let surname = { A: "Analogue", B: "Bomb", C: "Catalyst" };
function aliasGen(name, lastName) {
  const letters = "AEIOUBCDFGHJKLMNPQRSTVWXYZ";
  let letterName = name[0].toUpperCase();
  let letterLastName = lastName[0].toUpperCase();
  return letters.includes(letterName) && letters.includes(letterLastName)
    ? `${firstName[letterName]} ${surname[letterLastName]}`
    : "Your name must start with a letter from A - Z.";
}
console.log(aliasGen("Bary", "Brentwood"));
