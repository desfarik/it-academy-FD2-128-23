function aliasGen(a, b) {
    let alias = "";
    if (isFinite(a[0]) || isFinite(b[0])){
        return "Your name must start with a letter from A - Z.";
    }

    for (let key in firstName)
        if (a[0].toUpperCase() === firstName[key][0].toUpperCase()) {
            alias += firstName[key] + " ";
        } 

    for (let key in surname)
        if (b[0].toUpperCase() === surname[key][0].toUpperCase()) {
            alias += surname[key];
        } 

    return alias;
}


// console.log не сработает, на codewars объекты предварительно загружены