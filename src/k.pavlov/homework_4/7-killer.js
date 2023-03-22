function killer(suspectInfo, dead) {
    for (const key in suspectInfo) {
        if (suspectInfo[key].includes(...dead)) {
            return key
        }
    }
}


console.log(killer({
    'James': ['Jacob'],
    'Johnny': ['David', 'Kyle', 'Lucas', 'Bill'],
    'Peter': ['Lucy', 'Kyle']
}, ['Lucas', 'Bill']))