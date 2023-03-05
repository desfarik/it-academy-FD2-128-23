function consonantCount(str) {
    let count = 0;
    let consonants = "bcdfghjklmnpqrstvwxyz";
    str = str.toLowerCase();
    for (let i = 0; i < str.length; i++) {
        if (consonants.includes(str[i])) {
            count++;
          }
    }
    return count;
}
console.log(consonantCount('WEJF34812nv,xcv23m'));