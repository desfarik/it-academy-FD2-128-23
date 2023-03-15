function updateLight(current) {
  switch (current) {
    case "green":
      return "yellow";
    case "yellow":
      return "red";
    case "red":
      return "green";
    default:
      throw "Error: wrong input";
  }
}
console.log(updatelight("yellow"));
