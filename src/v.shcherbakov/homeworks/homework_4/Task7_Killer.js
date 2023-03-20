function killer(suspectInfo, dead) {
    for (const name in suspectInfo) {
        for (const killed of dead) {
            if (suspectInfo[name].includes(killed)) {
                return name;
            }
        }
    }
}


console.log(killer({
        'James': ['Jacob', 'Bill', 'Lucas'],
        'Johnny': ['David', 'Kyle', 'Lucas'],
        'Peter': ['Lucy', 'Kyle']
    }, ['Lucas', 'Bill']
));