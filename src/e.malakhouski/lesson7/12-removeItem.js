// function removeItem(array, index) {
    
//     array.splice(index, 1);
//     return array;
// }



// function removeItem(array, index) {
//     const leftPart = array.slice(0, index);
//     const rightPart = array.slice(index+1);
    
//     return [...leftPart, ...rightPart];
// }



function removeItem(array, index) {
    let newArray = [];
    for(let i=0; i<array.length; i++) {
        if(index!==i) {
            newArray.push(array[i]);
        }
    }
    return newArray;
}

console.log(removeItem([1, 2, 3, 4, 5, 22, 3242, -1, -5], 4));