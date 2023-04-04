function aliasGen(first, last) {
  let firstName = first[0].toUpperCase();
  let surname = last[0].toUpperCase();

  if (firstName[first] && surname[last]) {
    return `${firstName[first]} ${surname[last]}`;
  } else {
    return "Your name must start with a letter from A - Z.";
  }
}


console.log(aliasGen("Mike", "Millington"));

