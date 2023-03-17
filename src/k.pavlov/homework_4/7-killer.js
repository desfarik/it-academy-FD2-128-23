function killer(suspectInfo, dead) {
    //return Object.values(dead)
    // for (const key in suspectInfo) {
    //     if (Object.values(dead) in Object.values(suspectInfo)) {
    //        return  suspectInfo[key]
    //     }
    // }

    if (Object.values(dead) in Object.values(suspectInfo)) {
        return Object.keys(suspectInfo)
    }
}

console.log(killer({'James': ['Jacob', 'Bill', 'Lucas'],
    'Johnny': ['David', 'Kyle', 'Lucas'],
    'Peter': ['Lucy', 'Kyle']}, ['Lucas', 'Bill']))