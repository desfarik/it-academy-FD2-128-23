function strCount(obj){
    let count = 0
    for (let key in obj) {
        if (typeof obj[key] === 'string') {
            count++
        } else {
            count += strCount(obj[key])
        }
    }
    return count
}

console.log(strCount({
    first:  "1",
    second: "2",
    third:  false,
    fourth: ["anytime",2,3,'4'],
    fifth:  null,
    sixth:  undefined,
    seventh:{}
  }));

console.log(strCount([
    'strin', 'strin', 'strin', 'strin',
    'strin', 'strin', 'strin', 'strin',
    'strin', 'strin', 'strin', 'strin',
    'strin', 'strin', 'strin', 'strin',
    'strin', 'strin', 'strin', 'strin',
    'strin', 'strin', 'strin', 'strin',
    'strin', 'strin', 'strin', 'strin',
    'strin', 'strin', 'strin', 'strin',
    'strin', 'strin', 'strin'
  ]));