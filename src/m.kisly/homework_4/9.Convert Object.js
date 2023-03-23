function convertHashToArray(hash) {
  return Object.entries(hash).sort();
}

console.log(convertHashToArray({name: "Jeremy"}),[["name", "Jeremy"]]);
console.log(convertHashToArray({name: "Jeremy", age: 24}),[["age", 24], ["name", "Jeremy"]]);
console.log(convertHashToArray({name: "Jeremy", age: 24, role: "Software Engineer"}),[["age", 24], ["name", "Jeremy"], ["role", "Software Engineer"]]);
console.log(convertHashToArray({product: "CodeWars", powerLevelOver: 9000}),[["powerLevelOver", 9000], ["product", "CodeWars"]]);
console.log(convertHashToArray({}),[]);