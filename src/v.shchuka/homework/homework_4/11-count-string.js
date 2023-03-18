function strCount(obj) {
  let arrValues = Object.values(obj).flat();
  let counter = 0;
  for (const element of arrValues) {
    if (typeof element === "object" && element !== null) {
      for (const key in element) {
        arrValues.push(element[key]);
      }
    } else if (typeof element === "string") {
      counter++;
    }
  }
  return counter;
}
const obj = {
  first: "1",
  second: "2",
  third: false,
  fourth: ["anytime", 2, 3, 4],
  fifth: null,
  sixth: undefined,
  seventh: { name: "alisa" },
};
console.log(strCount(obj));
