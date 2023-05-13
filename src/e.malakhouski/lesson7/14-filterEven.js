function filterEven(array) {
    let result = [];
    for(let i=0; i<array.length; i++) {
        if(array[i]%2==0){
            result.push(array[i]);
        }
    }
    return result;
}

console.log(filterEven([1, 2, 3, 4, 5, 22, 3242, -1, -5]));

// array.map((item,index,arr) {
//     console.log(item,index,arr);
// })
//array.forEach()
//array.reduce()
//array.some()
//array.flatMap()
//array.filter()
//array.every()
//array.reduce()
