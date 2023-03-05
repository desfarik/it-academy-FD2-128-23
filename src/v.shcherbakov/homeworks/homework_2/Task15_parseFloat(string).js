function parseFloat(string) {
let signs="1234567890.";
let res='';
    for (let i = 0; i < string.length ; i++) {
        if (signs.includes(string[i])){
            res += string[i];
        } else {
            break;
        }
    }
    return res === '' ? Nan : + res;
}

console.log(parseFloat('15.28db9px=jkvbr123'));