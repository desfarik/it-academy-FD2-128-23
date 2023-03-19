function killer(suspectInfo, dead) {
  return Object.keys(suspectInfo).find((a) => 
  dead.every((b) => suspectInfo[a].includes(b)));
}

killer({'James': ['Jacob', 'Bill', 'Lucas'], 'Johnny': ['David', 'Kyle', 'Lucas'], 'Peter': ['Lucy', 'Kyle']}, ['Lucas', 'Bill']);