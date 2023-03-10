// 15 parseFloat(string)
function customParseFloat(string) {
  let result = "";
  for (let i = 0; i < string.length; i++) {
    if (
      Number(string[i]) ||
      ((string[i] === "-" || string[i] === "." || string[i] === "+") &&
        Number(string[i + 1])) ||
      ((string[i] === "e" || string[i] === "E") &&
        (string[i + 1] === "+" || string[i + 1] === "-"))
    ) {
      result += string[i];
    } else break;
  }
  return Number(result);
}
console.log(customParseFloat("-4.23e+21str"));
