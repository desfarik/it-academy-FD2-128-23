function killer(suspectInfo, dead) {
    for (let name in suspectInfo) {
        let count = 0
        for (let i = 0; i < dead.length; i++) {
            if (suspectInfo[name].includes(dead[i])) {
               count++
            }
            if (count === dead.length) {
                return name
            }
        } 
    }
}

console.log(killer({
    'Johnny': ['David', 'Kyle', 'Lucas'],
    'James': ['Jacob', 'Bill', 'Lucas'],
    'Peter': ['Lucy', 'Kyle']
}, ['Lucas', 'Bill']));