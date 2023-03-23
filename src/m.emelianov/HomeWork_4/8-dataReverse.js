function dataReverse(data) {
    let size = 8;
    let subarray = [];
    for (let i = 0; i < Math.ceil(data.length/size); i++){
        subarray[i] = data.slice(i * size, i * size + size)
    }
    return subarray.reverse().flat(1) 
}
  console.log(dataReverse([1,1,1,1,1,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,1,0,1,0,1,0,1,0]))
  console.log(dataReverse([0,0,1,0,1,0,0,1,0,0,1,1,0,1,1,0]))