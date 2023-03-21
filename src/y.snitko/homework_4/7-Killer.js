function killer(suspectInfo, dead) {
  for (let key in suspectInfo) {
    for (let index = 0; index < dead.length; index++) {
      if (suspectInfo[key].includes(...dead)) {
        return key;
      }
    }
  }
}

console.log(
  killer(
    {
      James: ['Jacob', 'Bill', 'Lucas'],
      Johnny: ['David', 'Kyle', 'Lucas'],
      Peter: ['Lucy', 'Kyle'],
    },
    ['Kyle', 'Lucas']
  )
);
