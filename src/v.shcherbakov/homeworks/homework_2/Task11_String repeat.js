function repeatStr(n, str) {
    let new_str = '';
    while (n > 0) {
        new_str += str;
        n--;
    }
    // return new_str;
    console.log(new_str);
}

repeatStr(3, "*")