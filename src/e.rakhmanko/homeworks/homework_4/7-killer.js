function killer(suspectInfo, dead) {
  for (const killerName in suspectInfo) {
    for (const name of dead) {
      if (!suspectInfo[killerName].includes(name)) break;
      return killerName;
    }
  }
}
console.log(
  killer(
    {
      James: ["Jacob", "Bill", "Lucas"],
      Johnny: ["David", "Kyle", "Lucas"],
      Peter: ["Lucy", "Kyle"],
    },
    ["Lucas", "Bill"]
  )
);
