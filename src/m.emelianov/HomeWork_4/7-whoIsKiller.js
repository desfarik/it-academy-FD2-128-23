function killer(suspectInfo, dead) {
    for (let suspect in suspectInfo){
        let count = 0;
        for (let i = 0; i < dead.length; i++){
            if (suspectInfo[suspect].includes(dead[i])){
                count++;
            }
            if (count === dead.length){
                return suspect
            }
        }
    }
}


console.log(killer({'James': ['Jacob', 'Bill', 'Lucas'], 'Johnny': ['David', 'Kyle', 'Lucas'], 'Peter': ['Lucy', 'Kyle']}, ['Lucas', 'Bill'])) 
console.log(killer({'James': [ 'Bill'], 'Johnny': ['David', 'Kyle', 'Lucas'], 'Peter': ['Lucy', 'Kyle']}, ['Lucas'])) 