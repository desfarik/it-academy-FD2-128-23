// function min (array){
//     array.sort((a,b)=> a-b);
//     return array[0];
// }

function min (array){
    return Math.min(...array);
}

console.log(min([1,2,3,4,5,22,3242,-1,-5]));