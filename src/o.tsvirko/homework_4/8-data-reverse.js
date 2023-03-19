function dataReverse(data) {
    let reversed = []
    while (data.length > 0) {
      reversed.push(...data.splice(data.length - 8, 8));
    }
    return reversed;
}
console.log(dataReverse([1,1,1,1,1,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,1,0,1,0,1,0,1,0]))