function killer(suspectInfo, dead) {
  for (let name in suspectInfo) {
    if (dead.every((deadPerson) => suspectInfo[name].includes(deadPerson))) {
      return name;
    }
  }
}
let suspectInfo = {
  James: ["Jacob", "Bill", "Lucas"],
  Johnny: ["David", "Kyle", "Lucas"],
  Peter: ["Lucy", "Kyle"],
};
let dead = ["Lucas", "Bill"];
console.log(killer(suspectInfo, dead));
