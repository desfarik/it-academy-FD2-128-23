function killer(suspectInfo, dead) {
  let object = {};
  for (const key in suspectInfo) {
    let arr = [];
    for (const name of suspectInfo[key]) {
      if (dead.includes(name)) {
        arr.push(name);
      }
    }
    object[key] = arr.length;
  }
  const max = Math.max(...Object.values(object));
  for (const key in object) {
    if (object[key] === max) {
      return key;
    }
  }
}
const suspectInfo = {
  James: ["Jacob", "David", "Lucas"],
  Johnny: ["Bill", "Kyle", "Lucas"],
  Peter: ["Lucy", "Kyle"],
};
const dead = ["Lucas", "Bill"];
console.log(killer(suspectInfo, dead));
