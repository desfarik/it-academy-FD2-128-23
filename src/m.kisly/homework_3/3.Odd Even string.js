function sortMyString(S) {
    let oddStr = ''
    let evenStr = ''
    for (let i = 0; i < S.length; i++) {
        if (i % 2 === 0) {
            evenStr += S[i]
        }else{
            oddStr += S[i]
        }        
    }
    
    return `${evenStr} ${oddStr}`
}

console.log(sortMyString("CodeWars"))       //CdWr oeas
console.log(sortMyString("YCOLUE'VREER"))   //YOU'RE CLEVER