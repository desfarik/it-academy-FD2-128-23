function killer(suspectInfo, dead) {
    for (let key in suspectInfo) {
      for (let i = 0; i < dead.length; i += 1) {
        if (suspectInfo[key].includes(dead[i])) {
        return key;
      }
      }
    }
}
console.log(killer({'James': ['Jacob', 'Bill', 'Lucas'], 'Johnny': ['David', 'Kyle', 'Lucas'], 'Peter': ['Lucy', 'Kyle']}, ['Lucas', 'Bill']))