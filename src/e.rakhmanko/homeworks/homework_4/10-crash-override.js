let firstName = { A: "Alpha", B: "Beta", C: "Cache" };
let surname = { A: "Analogue", B: "Bomb", C: "Catalyst" };
function aliasGen(first, last) {
  let UppercasedFirst = first[0].toUpperCase();
  let UppercasedLast = last[0].toUpperCase();

  if (firstName[UppercasedFirst] && surname[UppercasedLast]) {
    return firstName[UppercasedFirst] + " " + surname[UppercasedLast];
  } else {
    return "Your name must start with a letter from A - Z.";
  }
}
