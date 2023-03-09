function consonantCount(str) {
    let x = 0;
    let Arr = ['b','c','d','f','g','h','j','k','l','m','n','p','q','r','s','t','v','w','x','y','z'];
        // ["a", "e", "i", "o", "u"];
    // str === str.toLowerCase;
    for (let i = 0; i < str.length; i++) {
        for (let j = 0; j < Arr.length; j++) {
            if (str.toLowerCase()[i] === Arr[j]) {
                ++x;
                break
            }
        }

    }
    return x;

}

console.log(consonantCount('bcdfghjklmnpqrsaaff=/tvrrwxyzBCDFGHJKLMNPQRSTVWXYZ'))
