function sentence(list) {
  let totalObject = {};
  let arrStr = [];
  for (const obj of list) {
    for (const key in obj) {
      totalObject[key] = obj[key];
    }
  }
  const arrKeys = Object.keys(totalObject).sort((a, b) => a - b);
  for (const key of arrKeys) {
    arrStr.push(totalObject[key]);
  }
  return arrStr.join(" ");
}
const list = [
  { 4: "dog" },
  { 2: "took" },
  { 3: "his" },
  { "-2": "Vatsan" },
  { 5: "for" },
  { 6: "a" },
  { 12: "spin" },
];
console.log(sentence(list));
