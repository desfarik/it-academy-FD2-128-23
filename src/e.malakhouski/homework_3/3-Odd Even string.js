function sortMyString(S) {
    let evenIndex = "";
    let oddIndex = "";
    for (let i = 0; i < S.length; i++) {
        i % 2 == 0 ? evenIndex += S[i] : oddIndex += S[i];
    }
    return `${evenIndex} ${oddIndex}`;
}

console.log(sortMyString("YCOLUE'VREER"));


