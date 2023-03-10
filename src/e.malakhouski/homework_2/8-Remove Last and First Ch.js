function removeChar(str) {
  if (str.length > 1) {
    return str.slice(1, -1);
  } else {
    return str;
  }
}

console.log(removeChar("privet"));
