function sortMyString(S) {
    let even = [];
    let odd = [];
    for (let i = 0; i < S.length; i++) {
        if (i % 2 === 0) {
             even.push(S[i]);
        } else {
            odd.push(S[i]);
        }
    }
    return even.join('') + ' ' + odd.join('');
}

console.log(sortMyString('CodeWars'));
