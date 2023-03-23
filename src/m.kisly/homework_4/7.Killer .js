function killer(suspectInfo, dead) {
    for (key in suspectInfo) {
        let counter = 0;
        for (let i = 0; i < dead.length; i++) {
            let search = suspectInfo[key].indexOf(dead[i])
            if (search >= 0) {
                counter++
            }
            if (counter === dead.length) {
                return key
            }
        }
    }
    return key;
}

console.log(killer({ 'James': ['Jacob', 'Bill', 'Lucas'], 'Johnny': ['David', 'Kyle', 'Lucas'], 'Peter': ['Lucy', 'Kyle'] }, ['Lucas', 'Bill']), 'James');
console.log(killer({ 'Brad': [], 'Megan': ['Ben', 'Kevin'], 'Finn': [] }, ['Ben']), 'Megan');
